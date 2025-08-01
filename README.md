# TsunamiTide-Tracker
First stab at manual upload, deleted the agent for this build as an overly bold test so am uploading from my 3x backuped 1st successful shot.

Manually loading seems too many files to just drop the whole folder in so zipped it.

I'm sure i could make it sync up with git locally or even cursor but meh, diffeent test.

Ryan, I NEED BEST PRACTICES!!!! Plz ♥

-----------------------------------------------------

TsunamiTide Tracker 

Correlates tsunami arrival times with local tide conditions for coastal risk assessment

Features
Real-time global tsunami alerts

Tide table integration

Coastal impact risk analysis

Interactive map visualization

Mobile-responsive design

Data Sources
Type	Provider	Format	Endpoint

Tsunami Alerts	GDACS	JSON	https://www.gdacs.org/gdacsapi/api/events/geteventlist/tsunami

Tsunami Warnings	NOAA	XML	https://www.tsunami.gov/events.xml

Tide Data	NOAA	JSON	https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&station={id}

Tide Data	WorldTides	JSON	https://www.worldtides.info/api/v3?heights&lat={lat}&lon={lon}
