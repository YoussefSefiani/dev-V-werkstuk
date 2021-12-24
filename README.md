# dev-V-werkstuk tutorial

## Part 1

### Create .env and fill in the fields you will find on the .env.example file.

### Run the necessary commands in the terminal:

#### docker compose build

#### docker compose up

## Part 2

### List of endpoints

#### 1. Influencers

##### [GET] /inluencers \* get list of influencers

##### [GET] /inluencers/:id \* get single influencer

##### [GET] /last-influencer/ \* get last influencer

##### [DELETE] /inluencers/:id \* delete influencer

##### [POST] /payments/ \* add an influencer

##### [PUT] /payments/:id \* add an influencer

##### add to [POST] and [PUT] request:

### \* @param {String} first_name

### \* @param {String} last_name

### \* @param {String} birth_date

### \* @param {String} email

### \* @param {String} description

### \* @param {String} iban

#### 2. Payments

##### [GET] /payments \* get list of payments

##### [GET] /payments/:id \* get single payments

##### [GET] /last-payment/ \* get last payment

##### [DELETE] /payments/:id \* delete payments

##### [POST] /payments/ \* add an influencer

##### [PUT] /payments/:id \* add an influencer

##### add to [POST] and [PUT] request:

### \* @param {Int} influencer_id

### \* @param {Int} brand_id

### \* @param {Int} amount

#### 2. Brands

##### [GET] /brands \* get list of brands
