# STEPS TO SEQUELIZE THE STAR WARS APP

  * Install the sequelize and mysql2 npm packages.
  * Create a `'starwars'` DB.
  * Delete the orm from config.
  * Use the sequelize-cli to 'init:models' and 'init:config' inside `'app'`
  * Add your password to the development config, and change the database name to `'starwars'`
  * In the `'models'` folder, create Character model in a `character.js` file 
    * Match the schema provided in schema.sql!
  * Remove all references to the old orm file and replace it with our Character
  * Modify `'api-routes.js'` using sequelize query methods to create the required routes.
  * Modify `'server.js'` to enable our seqeulize ORM!
