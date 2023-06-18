SELECT 'CREATE DATABASE instituto'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'instituto')\gexec