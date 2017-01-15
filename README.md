Integration test between nodeJS and PHP started by jdutheil

The orginal project has been adapted so that the DB updates are perfomed by NodeJS to enable update notifications to be broadcast to connected clients.

Ultimately the client could be informed of the type of update and perform actions as a result (e.g. make an ajax request to update the page contents if the page being viewed has been affected by the notified change).

It is still basically just a test project, but the logic of the application can be used for a lot of purposes (realtime notifications, ...) and easily deployed in another project.

Still to do:

Error handling
Clusters
Tidying up