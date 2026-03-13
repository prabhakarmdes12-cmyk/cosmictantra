
CREATE TABLE users(id SERIAL PRIMARY KEY,email TEXT);
CREATE TABLE birth_charts(id SERIAL PRIMARY KEY,user_id INT,chart_json JSONB);
