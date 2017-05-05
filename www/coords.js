var coords = [
  {datetime: '2017/03/11 23:29', latitude: '26-45.60N', longitude: '082-03.47W', comment: "Burnt Store Marina, Punta Gorda", course: '', speed: '' },
  {datetime: '2014/09/16 18:08', latitude: '37-05.38N', longitude: '122-20.73W', comment: "Pt Ano Nuevo on the way to Santa Cruz.", course: '133T', speed: '6.0' },
  {datetime: '2015/04/06 22:26', latitude: '24-10.96N', longitude: '110-18.18W', comment: "Docked at Marina Palmira, La Paz", course: '', speed: '' },
  {datetime: '2014/08/05 04:12', latitude: '43-31.66N', longitude: '124-30.13W', comment: "Heading to Eureka - mostly calm; ", course: '211T', speed: '5.3' },
  {datetime: '2016/01/06 02:36', latitude: '24-33.66N', longitude: '110-23.80W', comment: "Beautiful Ensenada Grande", course: '', speed: '' },
  {datetime: '2014/12/05 05:27', latitude: '25-30.12N', longitude: '113-14.56W', comment: "Slappey is out playing with the big boats. Furthest point from land for us.", course: '163T', speed: '4.0' },
  {datetime: '2014/08/14 03:52', latitude: '40-25.47N', longitude: '124-33.45W', comment: "Whoo hoo! Past Cape Mendocino. We saw many many whales.", course: '148T', speed: '5.2' },
  {datetime: '2014/09/22 16:59', latitude: '35-21.77N', longitude: '120-51.17W', comment: "Arrived safe and sound in Morro Bay. Sea Otters!", course: '', speed: '' },
  {datetime: '2016/05/08 18:41', latitude: '27-00.25N', longitude: '080-05.73W', comment: "Hobe Sound. Quiet calm anchorage at night - boat city on the weekend.", course: '', speed: '' },
  {datetime: '2017/03/09 01:02', latitude: '26-41.34N', longitude: '082-14.58W', comment: "Snug in shallow Pelican Bay with a zillion other boats", course: '', speed: '' },
  {datetime: '2016/06/02 13:50', latitude: '29-34.63N', longitude: '080-11.61W', comment: "In a little canal, Palm Coast, Fl", course: '', speed: '' },
  {datetime: '2014/08/11 17:20', latitude: '40-48.43N', longitude: '124-09.78W', comment: "Two tired puppies in Eureka.", course: '', speed: '' },
  {datetime: '2015/05/31 14:31', latitude: '25-30.97N', longitude: '111-04.16W', comment: "Agua Verde where the skies are blue, the water is clear and the seas are calm.", course: '', speed: '' },
  {datetime: '2014/11/29 16:22', latitude: '29-04.43N', longitude: '115-39.40W', comment: "On the way to Turtle Bay.", course: '164T', speed: '4.4' },
  {datetime: '2014/08/11 09:17', latitude: '41-06.14N', longitude: '124-16.33W', comment: "Headed in towards Eureka.", course: '232T', speed: '4.4' },
  {datetime: '2015/02/04 22:06', latitude: '21-30.97N', longitude: '105-14.53W', comment: "Escaped from Mazatlan at last! Anchored in Matanchen Bay outside San Blas.", course: '', speed: '' },
  {datetime: '2015/02/02 18:10', latitude: '23-16.10N', longitude: '106-27.84W', comment: "Leaving Mazatlan Tomorrow - at long last. Great place, but time to go.", course: '', speed: '' },
  {datetime: '2015/02/12 12:32', latitude: '20-41.51N', longitude: '105-17.58W', comment: "Nueva Vallarta!", course: '', speed: '' },
  {datetime: '2016/12/01 00:30', latitude: '26-43.39N', longitude: '081-41.46W', comment: "W.P. Franklin Lock and Campground", course: '', speed: '' },
  {datetime: '2014/12/09 16:04', latitude: '23-52.48N', longitude: '111-13.58W', comment: "Crossing the Tropic of Cancer today! Steaming towards Cabo in calm seas.", course: '130T', speed: '4.3' },
  {datetime: '2015/07/09 03:05', latitude: '27-56.85N', longitude: '111-03.32W', comment: "Marina San Carlos - Air condiioned comfort here we come!", course: '', speed: '' },
  {datetime: '2014/08/15 03:39', latitude: '38-59.88N', longitude: '123-49.56W', comment: "Approaching Pt Arena - slow going", course: '177T', speed: '4.1' },
  {datetime: '2014/08/07 19:47', latitude: '41-44.90N', longitude: '124-11.11W', comment: "Leaving Crescent City for Bodega Bay.", course: '', speed: '' },
  {datetime: '2014/09/28 15:13', latitude: '35-21.77N', longitude: '120-51.17W', comment: "Leaving Morro Bay for Santa Barbara. Should be there by tomorrow afternoon.", course: '', speed: '' },
  {datetime: '2016/11/09 22:04', latitude: '29-51.70N', longitude: '081-18.47W', comment: "Anchored S of St. Augustine on the 1st day of the Idiocracy.", course: '', speed: '' },
  {datetime: '2016/11/02 01:33', latitude: '30-41.51N', longitude: '081-27.24W', comment: "Tiger Point Boatyard - New MaxProp Installed!", course: '', speed: '' },
  {datetime: '2014/08/25 02:21', latitude: '37-47.17N', longitude: '122-16.12W', comment: "Relaxing in Alameda", course: '', speed: '' },
  {datetime: '2014/09/15 17:14', latitude: '37-38.35N', longitude: '122-34.51W', comment: "On the way to Half Moon Bay.", course: '187T', speed: '4.8' },
  {datetime: '2014/12/04 15:54', latitude: '26-16.37N', longitude: '113-49.41W', comment: "Slappey in Sloppy Seas on the way to Bahia Santa Maria", course: '119T', speed: '4.3' },
  {datetime: '2016/06/03 21:48', latitude: '29-53.53N', longitude: '081-18.56W', comment: "St. Augustine!", course: '', speed: '' },
  {datetime: '2014/10/25 22:25', latitude: '33-12.56N', longitude: '117-23.68W', comment: "Last stop before San Diego. Now in Oceanside.", course: '', speed: '' },
  {datetime: '2014/08/06 01:22', latitude: '41-50.30N', longitude: '124-24.34W', comment: "Next stop - Crescent City - good place to fix broken motor mount.; ", course: '210T', speed: '5.1' },
  {datetime: '2014/08/13 17:47', latitude: '40-48.42N', longitude: '124-09.79W', comment: "Ready to try again to get around Cape Mendocino.", course: '', speed: '' },
  {datetime: '2017/04/21 23:13', latitude: '24-50.49N', longitude: '080-47.98W', comment: "Sloppy slog at 3 knots to Jewfish Hole anchorage", course: '', speed: '' },
  {datetime: '2014/08/16 01:10', latitude: '38-19.77N', longitude: '123-03.38W', comment: "Safe and sound at Spud Point Marina in Bodega Bay.", course: '', speed: '' },
  {datetime: '2015/03/02 21:27', latitude: '19-11.70N', longitude: '104-40.96W', comment: "Barra de Navidad! (The other Barra de Navidad)", course: '', speed: '' },
  {datetime: '2014/07/21 04:11', latitude: '47-41.21N', longitude: '124-44.21W', comment: "Heading South - Off the Washington Coast", course: '183T', speed: '4.7' },
  {datetime: '2016/01/06 23:49', latitude: '24-12.93N', longitude: '110-17.93W', comment: "marina Costa Baja, La Paz!", course: '', speed: '' },
  {datetime: '2014/07/09 16:59', latitude: '48-06.37N', longitude: '122-46.59W', comment: "Slappey at Boat Haven, Pt Townsend - final fitting out for going down the coast.", course: '', speed: '' },
  {datetime: '2015/04/03 14:50', latitude: '23-59.39N', longitude: '109-49.69W', comment: "Ancored at Ensenada de los Muertos, BCS", course: '', speed: '' },
  {datetime: '2015/06/28 20:33', latitude: '26-37.10N', longitude: '111-33.95W', comment: "San Sebastian Cove; lovely oasis, scarey reefs!", course: '', speed: '' },
  {datetime: '2016/06/16 17:46', latitude: '31-02.77N', longitude: '081-25.35W', comment: "Jekyll Island, Georgia", course: '', speed: '' },
  {datetime: '2014/12/16 16:59', latitude: '23-02.11N', longitude: '108-10.05W', comment: "About half way to Mazatlan. Rolly seas but easy going.", course: '088T', speed: '4.8' },
  {datetime: '2014/08/11 03:49', latitude: '41-15.34N', longitude: '124-17.33W', comment: "Bad S wind and waves. 2 knots - yuk. Plan B to Eureka.", course: '193T', speed: '1.6' },
  {datetime: '2016/05/11 11:40', latitude: '27-39.38N', longitude: '080-22.26W', comment: "On a mooring ball in Vero Beach", course: '', speed: '' },
  {datetime: '2016/11/07 23:29', latitude: '30-23.89N', longitude: '081-27.45W', comment: "Sisters Creek Free Dock. Now with Lobotimized Frigoboat 'frige.", course: '', speed: '' },
  {datetime: '2014/08/15 15:49', latitude: '38-28.67N', longitude: '123-22.84W', comment: "Heading in to Bodega Bay. Too slow for Drake's Bay by tonight.", course: '137T', speed: '4.5' },
  {datetime: '2014/07/19 21:59', latitude: '48-22.07N', longitude: '124-36.70W', comment: "In Makah Marina - Tomorrow finally looks good to go!", course: '', speed: '' },
  {datetime: '2015/06/26 20:47', latitude: '26-22.06N', longitude: '111-25.97W', comment: "Caleta San Juanico - White sand, big rocks, flakey alternator - HOT", course: '', speed: '' },
  {datetime: '2015/06/18 22:27', latitude: '26-01.03N', longitude: '111-09.86W', comment: "Anchored in the beautiful little cove of Puerto Ballandra. Still have Telcel!", course: '', speed: '' },
  {datetime: '2016/05/03 00:51', latitude: '26-20.78N', longitude: '080-04.44W', comment: "Lake Boca Raton - ICW, the slow way", course: '', speed: '' },
  {datetime: '2017/03/30 17:45', latitude: '24-35.37N', longitude: '082-11.17W', comment: "beating into easterlies; nearing Booboo Key, Marquesas for the night  ", course: '', speed: '' },
  {datetime: '2015/06/29 20:08', latitude: '26-51.92N', longitude: '111-50.77W', comment: "Playa Santo Domingo at Bahia Concepcion. Zillions of jumping rays.", course: '', speed: '' },
  {datetime: '2015/02/28 01:46', latitude: '19-28.32N', longitude: '105-03.59W', comment: "Anchored in prettiest spot yet; Paraiso, Jalisco.", course: '', speed: '' },
  {datetime: '2015/05/29 05:08', latitude: '25-18.21N', longitude: '110-56.75W', comment: "Los Gatos - Awesome red rocks - rolly swell.", course: '', speed: '' },
  {datetime: '2016/03/19 01:29', latitude: '24-26.47N', longitude: '110-18.66W', comment: "Play Bonanza, Isla Espiritu Santo - Tomorrow we start across the sea to Mazatlan", course: '', speed: '' },
  {datetime: '2014/11/27 23:49', latitude: '30-24.10N', longitude: '115-56.28W', comment: "Happy Thanksgiving from Bahia de San Quintin.", course: '', speed: '' },
  {datetime: '2016/11/16 00:42', latitude: '28-15.50N', longitude: '080-40.25W', comment: "\"Cape Cod\" anchorage with beautiful sunset", course: '', speed: '' },
  {datetime: '2015/02/08 19:31', latitude: '21-09.75N', longitude: '105-13.60W', comment: "Escape from Mazatlan 2; now in pretty, little Chacala", course: '', speed: '' },
  {datetime: '2017/03/31 21:48', latitude: '24-33.77N', longitude: '081-48.00W', comment: "finally a nice sail; Conch Harbor, Key West! ", course: '', speed: '' },
  {datetime: '2014/07/13 15:44', latitude: '48-07.52N', longitude: '123-27.13W', comment: "Slappey waiting for a weather window in Pt. Angeles", course: '', speed: '' },
  {datetime: '2016/11/28 01:48', latitude: '26-41.09N', longitude: '080-44.01W', comment: "Anchored in South Bay, Lake Okeechobee.", course: '', speed: '' },
  {datetime: '2014/09/22 03:39', latitude: '35-56.02N', longitude: '121-37.10W', comment: "Offshore, headed to Morro Bay. Calm seas.", course: '146T', speed: '5.4' },
  {datetime: '2015/05/26 02:18', latitude: '24-54.55N', longitude: '110-42.36W', comment: "San Evaristo.", course: '', speed: '' },
  {datetime: '2015/03/24 00:06', latitude: '19-33.54N', longitude: '105-06.58W', comment: "Lovely Isla Pajarera in Bahia Chamela. Tomorrow , north around Cabo Corrientes.", course: '', speed: '' },
  {datetime: '2014/09/29 03:34', latitude: '34-53.67N', longitude: '120-50.37W', comment: "West of Pt Sal on the way to Pt Conception.", course: '158T', speed: '4.7' },
  {datetime: '2014/09/21 15:02', latitude: '36-57.87N', longitude: '122-00.12W', comment: "Leaving Santa Cruz for Morrow Bay.", course: '', speed: '' },
  {datetime: '2014/07/06 01:19', latitude: '48-30.62N', longitude: '122-55.15W', comment: "Slappey at Reid Harbor, Stuart Island; First cruising position repport", course: '', speed: '' },
  {datetime: '2014/07/22 03:53', latitude: '45-51.60N', longitude: '124-21.62W', comment: "Destination: Newport OR; ", course: '172T', speed: '3.9' },
  {datetime: '2017/03/23 00:56', latitude: '26-07.88N', longitude: '081-47.62W', comment: "Moored in Naples - town's a bit posh but city docks are anything but.", course: '', speed: '' },
  {datetime: '2017/04/05 20:21', latitude: '24-42.30N', longitude: '081-06.71W', comment: "Marathon", course: '', speed: '' },
  {datetime: '2014/09/30 23:02', latitude: '34-24.30N', longitude: '119-41.44W', comment: "Happily tucked into Santa Barbara Harbor since yesterday; nice and warm here.", course: '', speed: '' },
  {datetime: '2015/12/13 15:32', latitude: '25-49.23N', longitude: '111-18.75W', comment: "Hanging out a mooring ball at Puerto Escondido.", course: '', speed: '' },
  {datetime: '2015/03/02 00:35', latitude: '19-13.83N', longitude: '104-43.85W', comment: "Cuastecomate - the name says it all.", course: '', speed: '' },
  {datetime: '2014/11/27 05:22', latitude: '31-02.55N', longitude: '116-30.05W', comment: "Calm Seas heading south to Bahia de San Quintin.", course: '158T', speed: '4.8' },
  {datetime: '2014/12/17 17:36', latitude: '23-16.11N', longitude: '106-27.84W', comment: "at the dock, El Cid Marina, Mazatlan.....at last! ", course: '', speed: '' },
  {datetime: '2014/10/24 00:57', latitude: '33-27.69N', longitude: '117-42.19W', comment: "Now in Dana Point.", course: '', speed: '' },
  {datetime: '2014/07/21 22:59', latitude: '46-16.23N', longitude: '124-22.06W', comment: "Heading South - West of Columbia River Bar", course: '183T', speed: '5.1' },
  {datetime: '2015/02/23 00:10', latitude: '19-35.05N', longitude: '105-07.86W', comment: "Anchored in beautiful Chamela - Finally, an easy trip with no surprise ending.", course: '', speed: '' },
  {datetime: '2014/10/09 23:29', latitude: '33-59.02N', longitude: '118-27.09W', comment: "Made it all the way to Marina del Rey.", course: '', speed: '' },
  {datetime: '2015/04/05 23:03', latitude: '24-19.28N', longitude: '110-19.87W', comment: "Amazing Puerto Balandra! Anchored with 12 other boats and a Navy warship.", course: '', speed: '' },
  {datetime: '2015/05/20 01:37', latitude: '24-31.72N', longitude: '110-22.54W', comment: "Caleta Partida.", course: '', speed: '' },
  {datetime: '2015/02/22 00:54', latitude: '20-14.16N', longitude: '105-34.39W', comment: "Anchored in the scary little cove of Ipala.", course: '', speed: '' },
  {datetime: '2014/10/17 00:47', latitude: '33-20.86N', longitude: '118-19.57W', comment: "Avalon, Catalina Island - Fantastic!", course: '', speed: '' },
  {datetime: '2015/06/30 21:38', latitude: '27-14.09N', longitude: '112-06.21W', comment: "Sweet Pea Cove, Isla San Marcos", course: '', speed: '' },
  {datetime: '2016/11/17 20:27', latitude: '27-45.55N', longitude: '080-24.95W', comment: "Wabasso anchorage (Ossabaw backwards)", course: '', speed: '' },
  {datetime: '2014/08/02 05:14', latitude: '44-37.43N', longitude: '124-03.13W', comment: "Still in Newport! We THINK we see a weather window opening up in a few days...; ", course: '', speed: '' },
  {datetime: '2015/04/02 08:28', latitude: '23-33.11N', longitude: '107-40.00W', comment: "Crossing the Sea of Cortez to Los Muertos. Calm with a ring around the moon.", course: '279T', speed: '4.7' },
  {datetime: '2016/05/20 10:12', latitude: '28-21.45N', longitude: '080-43.52W', comment: "Dockside at Cocoa Village", course: '', speed: '' },
  {datetime: '2014/10/28 01:12', latitude: '32-43.57N', longitude: '117-12.61W', comment: "Harbor Island - San Diego.", course: '', speed: '' },
  {datetime: '2015/07/08 03:35', latitude: '27-36.32N', longitude: '111-42.80W', comment: "Crossing the sea to San Carlos - Venus is VERY bright!", course: '056T', speed: '5.1' },
  {datetime: '2016/11/14 10:32', latitude: '29-01.65N', longitude: '080-55.21W', comment: "New Smyrna Beach", course: '', speed: '' },
  {datetime: '2016/04/27 21:47', latitude: '26-03.53N', longitude: '080-07.78W', comment: "Ft. Lauderdale! Wait.....what?", course: '', speed: '' },
  {datetime: '2015/07/02 00:14', latitude: '27-20.22N', longitude: '112-15.80W', comment: "Santa Rosalia, cute and different", course: '', speed: '' },
  {datetime: '2015/06/24 21:05', latitude: '26-06.69N', longitude: '111-17.03W', comment: "Anchored in the lee of a sandspit on Isla Coronado", course: '', speed: '' },
  {datetime: '2014/11/20 22:12', latitude: '31-51.55N', longitude: '116-37.53W', comment: "We're in Ensenada!", course: '', speed: '' },
  {datetime: '2014/07/05 04:39', latitude: '48-30.63N', longitude: '122-55.15W', comment: "Slappey at Reid Harbor, Stuart Island; First cruising position repport", course: '', speed: '' },
  {datetime: '2016/11/26 21:35', latitude: '26-59.17N', longitude: '080-36.85W', comment: "Tied between dolphins at Port Mayaca locks, waiting to cross Lake Okeechobee.", course: '', speed: '' },
  {datetime: '2014/08/18 17:23', latitude: '37-51.85N', longitude: '122-29.39W', comment: "We made it! Under the Golden Gate at 8am. Now in Sausalito.", course: '', speed: '' },
  {datetime: '2014/10/07 02:19', latitude: '34-10.44N', longitude: '119-13.40W', comment: "Now in Channel Islands Harbor, Oxnard.", course: '', speed: '' },
  {datetime: '2014/08/17 23:44', latitude: '37-59.74N', longitude: '122-58.44W', comment: "Anchored in Drake's Bay. Tomorrow - the Golden Gate!", course: '', speed: '' },
  {datetime: '2014/07/01 15:40', latitude: '48-40.36N', longitude: '123-11.79W', comment: "Slappey at Reid Harbor, Stuart Island; First cruising position repport", course: '', speed: '' },
  {datetime: '2015/02/04 11:07', latitude: '21-50.62N', longitude: '105-57.03W', comment: "Passing beautiful Isla Isabela under a full moon", course: '149T', speed: '4.8' },
  {datetime: '2016/06/23 15:40', latitude: '31-09.17N', longitude: '081-29.99W', comment: "Brunswick Landing, Brunswick, GA for the Summer", course: '', speed: '' },
  {datetime: '2014/08/06 05:10', latitude: '41-44.90N', longitude: '124-11.11W', comment: "Whoo hoo!  Docked in Crescent City - Slappey has arrived in California!; ", course: '', speed: '' },
  {datetime: '2014/11/30 19:24', latitude: '27-41.31N', longitude: '114-53.45W', comment: "Safe and Sound in Turtle Bay - Seems charming from the boat...", course: '193T', speed: '0.7' },
  {datetime: '2015/03/26 23:18', latitude: '23-16.11N', longitude: '106-27.85W', comment: "Could it be Mazatlan again???Sure enough, like a bad penney.... We're back!", course: '', speed: '' },
  {datetime: '2014/09/17 15:15', latitude: '36-57.87N', longitude: '122-00.11W', comment: "Safe and sound in hurricane free Santa Cruz.", course: '', speed: '' },
  {datetime: '2016/11/11 17:48', latitude: '29-34.62N', longitude: '081-11.55W', comment: "tucked into little Palm Coast marina", course: '', speed: '' },
  {datetime: '2017/03/28 18:46', latitude: '24-37.49N', longitude: '082-52.34W', comment: "Anchored at Ft Jefferson, Dry Tortugas - Wow!", course: '', speed: '' },
  {datetime: '2017/04/24 02:00', latitude: '25-51.95N', longitude: '079-51.05W', comment: "Escaping the Keys by surfing the Gulfstream", course: '002T', speed: '7.6' },
  {datetime: '2015/05/23 02:05', latitude: '24-49.67N', longitude: '110-34.00W', comment: "A sloppy slog to Isla San Fransisco", course: '', speed: '' },
  {datetime: '2015/02/09 23:30', latitude: '20-45.98N', longitude: '105-30.65W', comment: "Made it to Banderas Bay - Hook down in the Punta de Mita Anchorage.", course: '', speed: '' },
  {datetime: '2014/09/14 19:18', latitude: '37-48.59N', longitude: '122-25.47W', comment: "Anchored in Aquatic Park. Tomorrow we're off to  Half Moon Bay.", course: '', speed: '' },
  {datetime: '2016/11/18 20:03', latitude: '27-27.05N', longitude: '080-19.20W', comment: "Ft. Pierce City Marina", course: '', speed: '' },
  {datetime: '2014/09/16 02:45', latitude: '37-29.89N', longitude: '122-29.10W', comment: "A lovely anchorage in Half Moon Bay.", course: '', speed: '' },
  {datetime: '2016/11/30 00:45', latitude: '26-46.19N', longitude: '081-26.51W', comment: "Watching the sunset, anchored in the Okeechobee waterway outside La Belle.", course: '', speed: '' },
  {datetime: '2015/03/02 00:38', latitude: '19-13.83N', longitude: '104-43.85W', comment: "Barra de Navidad! ", course: '', speed: '' },
  {datetime: '2017/03/27 04:46', latitude: '25-14.22N', longitude: '082-25.82W', comment: "Rough broad reach sailing to Dry Tortugas", course: '182T', speed: '4.0' },
  {datetime: '2014/07/23 03:26', latitude: '44-37.43N', longitude: '124-03.13W', comment: "We made it!  Now in a slip in Newport OR; ", course: '', speed: '' },
  {datetime: '2015/03/20 19:19', latitude: '19-17.91N', longitude: '104-50.26W', comment: "Anchored in tropical Tenacatita. Finally headed up north for the summer.", course: '', speed: '' },
  {datetime: '2016/03/22 15:08', latitude: '23-16.10N', longitude: '106-27.86W', comment: "Calm and rested at El Cid in Mazatlan - just waiting for our ship to come in.", course: '', speed: '' },
  {datetime: '2014/07/07 01:26', latitude: '48-24.84N', longitude: '122-39.22W', comment: "Slappey at Reid Harbor, Stuart Island; First cruising position repport", course: '', speed: '' },
  {datetime: '2014/08/15 09:34', latitude: '38-42.97N', longitude: '123-37.89W', comment: "Nothing to see here. Move along.", course: '145T', speed: '2.8' },
  {datetime: '2014/12/10 22:35', latitude: '22-53.11N', longitude: '109-54.63W', comment: "moored in Cabo San Lucas; happy to be here", course: '', speed: '' },
  {datetime: '2016/12/01 21:16', latitude: '26-38.89N', longitude: '081-52.05W', comment: " Ft Myers Yacht Basin", course: '', speed: '' },
  {datetime: '2017/04/25 02:47', latitude: '26-50.31N', longitude: '080-03.30W', comment: "Now calm in north Lake Worth anchorage. ", course: '', speed: '' },
  {datetime: '2017/03/08 00:59', latitude: '26-27.37N', longitude: '082-09.42W', comment: "Rocking and rolling off Bowman Beach, Sanibel Island", course: '', speed: '' },
  {datetime: '2016/11/28 21:51', latitude: '26-49.89N', longitude: '081-05.40W', comment: "At the town dock in Moore Haven", course: '', speed: '' },
  {datetime: '2015/06/03 04:22', latitude: '25-49.28N', longitude: '111-18.66W', comment: "Puerto Escondido - no phone, nearly no net, good food and interesting people.", course: '', speed: '' },
  {datetime: '2016/01/04 03:20', latitude: '24-54.67N', longitude: '110-42.33W', comment: "Ready for a calm night in San Evaristo.", course: '', speed: '' },
  {datetime: '2014/12/05 23:15', latitude: '24-46.33N', longitude: '112-15.48W', comment: "Anchor down Bahia Santa Maria", course: '', speed: '' },
  {datetime: '2014/07/17 00:51', latitude: '48-22.36N', longitude: '124-37.00W', comment: "Anchored in Neah Bay in 20 knot winds", course: '', speed: '' },
  {datetime: '2014/11/20 04:19', latitude: '32-24.02N', longitude: '117-11.64W', comment: "Finally! Sailing in Mexico.", course: '170T', speed: '4.2' },
  {datetime: '2017/03/01 00:13', latitude: '26-32.25N', longitude: '081-59.75W', comment: "Anchored in Glover's Bight - Slappy's on the move.", course: '', speed: '' },
  {datetime: '2016/06/02 13:50', latitude: '29-34.63N', longitude: '080-11.61W', comment: "In a little canal, Palm Coast, Fl", course: '', speed: '' },
];
