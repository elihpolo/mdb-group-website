// All photography is U.S. Army imagery in the public domain (17 U.S.C. § 105), sourced
// via Wikimedia Commons from DVIDS / U.S. Army Flickr. Credits follow DoD guidance.
// Use of these images does not imply DoD endorsement, and the people and operations
// shown are not MDB Group projects. Images are representative only.

const base = import.meta.env.BASE_URL + 'images/';

const photo = (slug, alt, credit, source) => ({
  src: `${base}${slug}.webp`,
  srcSm: `${base}${slug}-sm.webp`,
  alt,
  credit,
  source,
});

export const photos = {
  hero: photo(
    'hero-stryker',
    'A U.S. Army Stryker vehicle silhouetted against the setting sun at the National Training Center',
    'U.S. Army photo by Sgt. Ryan Barwick',
    'https://commons.wikimedia.org/wiki/File:Stryker_Sunset.jpg',
  ),
  commandPost: photo(
    'command-post-night',
    'Soldiers conduct a planning meeting under red light during nighttime command post operations',
    'U.S. Army photo by Maj. Brian Sutherland',
    'https://commons.wikimedia.org/wiki/File:1-2CR_Conduct_Night_Command_Post_Operations_at_Saber_Junction_25_(9299840).jpg',
  ),
  toc: photo(
    'toc-monitoring',
    'A soldier monitors maps and data feeds across several screens in a tactical operations center',
    'U.S. Army photo',
    'https://commons.wikimedia.org/wiki/File:Flickr_-_The_U.S._Army_-_Monitoring_at_the_Tactical_Operations_Center.jpg',
  ),
  leaders: photo(
    'leaders-toc',
    'Army leaders confer while establishing a tactical operations center during a readiness exercise',
    'U.S. Army photo by Pfc. Madeline Lowell',
    'https://commons.wikimedia.org/wiki/File:SETAF-AF_Soldiers_establish_tactical_operations_center_during_deployment_readiness_exercise_(10059638).jpg',
  ),
  briefing: photo(
    'planning-briefing',
    'Army geospatial planners brief staff around a conference table with a map display',
    'U.S. Army photo, SETAF-AF',
    'https://commons.wikimedia.org/wiki/File:Geospatial_planning_cell_holds_best_mapper_competition_in_Italy_(8946398).jpg',
  ),
  logistics: photo(
    'logistics-dusk',
    'An Army mine-resistant all-terrain vehicle staged at dusk before a night convoy qualification',
    'U.S. Army photo by Sgt. James Larimer',
    'https://commons.wikimedia.org/wiki/File:Task_Force_Muleskinner_Soldiers_Complete_Convoy_Protection_Platform_Gunnery_Qualification_(9237181).jpg',
  ),
  motorpool: photo(
    'motorpool-sunset',
    'Army vehicles lined up in a motor pool as the sun sets over a training area',
    'U.S. Army photo by 1st Lt. Ellen Brabo',
    'https://commons.wikimedia.org/wiki/File:The_sun_sets_over_the_3rd_Squadron,_2d_Cavalry_Regiment%27s_designated_motorpool_at_the_Vaziani_Training_Area,_Georgia.jpg',
  ),
};
