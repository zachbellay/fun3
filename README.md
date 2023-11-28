
### Get local Postgres DB set up


#### Step 1: Create a .env File

Create a .env file in the root of your project and fill in the database configuration variables:

```sh
PGDATABASE=your_database_name
PGUSER=your_database_username
PGPASSWORD=your_database_password
PGHOST=localhost
PGPORT=5432
```

#### Step 2. Create the database

```bash
chmod +x setup_database.sh
./setup_database.sh
```


#### Step 3. Run migrations


```bash
python manage.py migrate
```
