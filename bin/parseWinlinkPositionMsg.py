#!/usr/bin/python
# Parse WinLink Position Report Email message files.
# ----------------------------------------------------------------------------
# WinLink message tools
# -----------------------------------------------------------------------------
# John Fogarty - https://github.com/jfogarty - johnhenryfogarty@gmail.com
# -----------------------------------------------------------------------------
#
# This parses Position Report .msg files and outputs CSV lines of the contents
#
# Content example (relevant lines)
#    TIME: 2017/03/27 04:46
#    LATITUDE: 25-14.22N
#    LONGITUDE: 082-25.82W
#    COURSE: 182T (not present in older WinLink versions)
#    SPEED: 4.0   ( "    "      "   "     "        "    )
#    COMMENT: Rough broad reach sailing to Dry Tortugas
#
# The CSV line is in the form:
#    time, lat, lon, course, speed, "comment"
# Comment is always quoted with double quotes.
#
# Malformed files (don't contain contain "TIME", "LATITUTE", and "LONGITUDE"
# fields) are ignored and nothing is output to stdout.
#
import fileinput
import fnmatch
import glob
import os
import shutil
import sys, getopt

positions = 0
options = {
        'quiet'      : False,
        'verbose'    : False,
        'trial'      : False,
        'debug'      : False,
        'javascript' : False,
        'ext'        : 'msg',
        'dir'        : 'Outbox',
    }
    
def printf(f, *args):
    if '{0' in f:
        print(f.format(*args))
    else:
        print(f % args)

def println(*args):
    if len(args) == 0:
        print
    else:
        for arg in args:    
            print(arg),
        endarg=args[-1]            
        if type(endarg) is str:
            if len(endarg) == 0:
                print
            elif endarg[-1] != '\n':
                print

def perror(*args):
    println("** Error:", *args)
    sys.exit(3)
    
def dbgprint(*args):
    if options['debug']:
        println(*args)

def qprint(*args):
    if not options['quiet']:
        println(*args)

def vprint(*args):
    if options['verbose']:
        println(*args)    

def dbgprintf(f, *args):
    if options['debug']:
        printf(f, *args)
        
def qprintf(f, *args):
    if not options['quiet']:
        printf(f, *args)

def vprintf(f, *args):
    if options['verbose']:
        printf(f, *args)
               
def is_line(var, line, start):
    if line.startswith(start):
        return line[len(start):-2]
    else:
        return var

def escape(txt):
    return txt
    
def domsg(fn):
    global positions
    dbgprint("----------------------------------------------------------------")
    dbgprintf("- Processing \"%s\"", fn)
    theTime   = ""
    theLat    = ""
    theLon    = ""
    theCmt    = ""
    theCourse = ""
    theSpeed  = ""
    with open(fn) as f:
        for line in f:
            theTime    = is_line(theTime,   line, "TIME: ")
            theLat     = is_line(theLat,    line, "LATITUDE: ")
            theLon     = is_line(theLon,    line, "LONGITUDE: ")
            theCmt     = is_line(theCmt,    line, "COMMENT: ")
            theCourse  = is_line(theCourse, line, "COURSE: ")
            theSpeed   = is_line(theSpeed,  line, "SPEED: ")
            dbgprint(line)  # Debugging only
    if len(theTime) != 0 and len(theLat) != 0:
        positions += 1
        if options['javascript']:
            printf("  {datetime: '%s', latitude: '%s', longitude: '%s', comment: \"%s\", course: '%s', speed: '%s' },", 
                theTime, theLat, theLon, escape(theCmt), theCourse, theSpeed)  
        elif options['verbose']:
            printf("%s: [%s,%s] at %s: \"%s\"", fn, theLat, theLon, theTime, theCmt) 
        else:
            printf("%s,%s,%s,%s,%s,%s,\"%s\"", theTime, theLat, theLon, theTime, theCourse, theSpeed, theCmt)

def do_on_all_files(dirpath, ffilter, func):
    fileset = [os.path.join(dirpath, f)
        for dirpath, dirnames, files in os.walk(dirpath)
        for f in fnmatch.filter(files, ffilter)]
    vprintf("- Found %d %s files to process.", 
        len(fileset), options['ext'])
    for fn in fileset:
        dbgprintf("--- File: %s", fn)
        func(fn)
    vprintf("- Processed %d files (%d positions)%s.", 
        len(fileset), positions,
        " (NOTE: TRIAL MODE - nothing done)" if options['trial'] else '')

def run():
    dirpath = options['dir']
    vprintf("- Processing MSG files in '{0}'", dirpath)
    if options['javascript']:
        printf("var coords = [")        
    do_on_all_files(dirpath, '*.' + options['ext'], domsg)
    if options['javascript']:
        printf("];")     
    vprint("- Done.")

def usage():
    printf("Usage: {0} [options] [dir]", options['scriptName'])
    printf("Parse a directory of winlink position report msg files.")
    printf('')
    printf("Options:")
    printf("  -q      : (--quiet) no output")
    printf("  -v      : (--verbose) lots of output")
    printf("  -t      : (--trial) trial mode, makes no changes")
    printf("  -j      : (--javascript) format as js source array")
    printf("  -e[ext] : (--ext) file extension to act on [{0}]",
        options['ext'])
    printf("  -d[dir] : (--dir) directory to process [{0}]",
        options['dir'])
    printf('') 

def main(argv):
    try:
        opts, args = getopt.getopt(argv,'hqvtjd:e:',[
            'quiet', 'verbose', 'trial', 'debug', 'javascript',
            'dir=', 'ext='])
    except getopt.GetoptError:
        usage()
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            usage()
            sys.exit()
        elif opt in ('-q', '--quiet'):
            options['quiet'] = True
        elif opt in ('-v', '--verbose'):
            options['verbose'] = True
        elif opt in ('-t', '--trial'):
            options['trial'] = True
        elif opt in ('-j', '--javascript'):
            options['javascript'] = True           
        elif opt in ('--debug'):
            options['debug'] = True
        elif opt in ('-d', '--dir'):
            options['dir'] = arg
        elif opt in ('-e', '--ext'):
            options['ext'] = arg
        if len(args) > 0:
            if len(args) > 1:
                perror("Only one [dir] argument may be supplied")
            options['dir'] = args[0]
    dbgprint(options, '\n')
    run()

if __name__ == "__main__":
   options['scriptName'] = sys.argv[0]
   main(sys.argv[1:])
# - End of python script.
   
