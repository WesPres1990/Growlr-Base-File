CREATE DATABASE growlr_db;

USE growlr_db;

CREATE TABLE Person (
    person_id INT(10) AUTO_INCREMENT NOT NULL,
    person_firstname VARCHAR(100) NOT NULL,
    person_lastname VARCHAR(100) NOT NULL,
    person_age INT(10) NOT NULL,
    person_email VARCHAR(100) NOT NULL,
    person_phone VARCHAR(15) NOT NULL,
    person_address VARCHAR(100) NOT NULL,
    person_city VARCHAR(100),
    person_state VARCHAR(100),
    -- person_image VARCHAR(100) NOT NULL,
    PRIMARY KEY (person_id)
);

CREATE TABLE Dog (
    dog_id INT(10) AUTO_INCREMENT NOT NULL,
    dog_name VARCHAR(100) NOT NULL,
    dog_age INT(10) NOT NULL,
    dog_sex VARCHAR(100),
    dog_breed VARCHAR(100),
    dog_sponsorName VARCHAR(100),
    dog_sponsorEmail VARCHAR(200),
    dog_sponsorPhone VARCHAR(100),
    dog_sponsorAddress VARCHAR(100),
    dog_city VARCHAR(100),
    dog_state VARCHAR(100),
    -- dog_facts VARCHAR(200),
    -- dog_image VARCHAR(100),
);


INSERT INTO Person (person_firstname, person_lastname, person_age, person_email, person_phone, person_address, person_city, person_state, person_zipcode, person_image)
VALUES
('Deric', 'Lewis', 24, 'dlewis@aol.com', '912-123-4321', '2478 Memorial Lane', 'Pooler, GA', '31322', '../public/assets/images/Deric-Lewis.jpg')
('Samantha', 'Davis', 31, 'samdav@hotmail.com', '701-321-1234', '319 Old Galvin Rd.', 'Fargo, ND', '58102', '../public/assets/images/Samantha-Davis.jpg')
('Carter', 'Lowe', 26, 'clowe@gmail.com', '586-231-3421', '383 Cactus Ave.', 'Zeeland, MI', '49464', '../public/assets/images/Carter-Lowe.jpg')
('Jerry', 'Turnip', 36, 'jturnip@bellsouth.net', '757-213-4231', '7889 Greenview Dr.', 'Roanoke, VA', '24012', '../public/assets/images/Jerry-Turnip.jpg')
('Turner', 'Classic', 35, 'tclass@att.net', '947-345-5432', '668 Cedar Swamp Street', 'Lansing, MI', '48910', '../public/assets/images/Turner-Classic.jpg')
('Lori', 'Lumpkin', 49, 'lori@msn.com', '616-657-5783', '230 Hamilton Ave.', 'Zeeland, MI', '49464', '../public/assets/images/Lori-Lumpkin.jpg')
('John', 'East', 'jeast@yahoo.com', '347-233-9475', '9860 Tailwater Street', 'Elmhurst, NY', '11373', '../public/assets/images/John-East.jpg')
('Maghan', 'Jhon',33, 'mjhon@icloud.com', '405-436-2113', '98 King Lane', 'Ada, OK', '74820',  '../public/assets/images/Maghan-Jhon.jpg')
('Matt', 'Murdock', 40, 'matt@live.com', '480-668-3425', '623 Bishop Lane', 'Chandler, AZ', '85224', '../public/assets/images/Matt-Murdock.jpg')
('Jane', 'West', 29, 'jwest@outlook.com', '305-219-3498', '969 Nichols St.', 'Middleburg, FL', '32068', '../public/assets/images/Jane-West.jpg')

INSERT INTO Dog (dog_name, dog_age, dog_sex, dog_breed, dog_sponsorName, dog_sponsorEmail, dog_sponsorPhone, dog_sponsorAddress, dog_city, dog_state, dog_zipcode, dog_facts, dog_image)
VALUES
('Ruben', 1, 'Male', 'Labrador Retriever', 'Affectionate, alert, smart and good with kids.', '../public/assets/images/Labrador-Retriever.jpg')
('Jericho', 2, 'Male', 'German Shepherd', 'Alert, confidant and courageous. Makes a great watchdog,', '../public/assets/images/German-Shephard.jpg')
('Pugsly', 2, 'Female', 'Pug', 'Affectionate, cheerful, playful. Makes a great starter dog.', '../public/assets/images/Pug.jpg')
('Gale', 1, 'Female', 'Australian Shepherd', 'Active, good-natured, loving, and protective', '../public/assets/images/Australian-Shepherd.jpg')
('Toko', 2, 'Female', 'Shiba Inu', 'Fearless, charming, outgoing. Great with kids and first time owners.', '../public/assets/images/Shiba-Inu.jpg')
('Berry', 2, 'Male', 'Beagle', 'Friendly, gentle, intelligent, and independant.', '../public/assets/images/Beagle.jpg')
('Logan', 1, 'Male', 'Rottweiler', 'Fearless, courageous, loyal and protective. Loves exercise.', '../public/assets/images/Rottweiler.jpg')
('Atlas', 2, 'Male', 'Siberian Husky', 'Alert, friendly, gental and intelligent. Great with kids and first time owners.', '../public/assets/images/Siberian-Husky.jpg')
('Charlotte', 1, 'Female', 'Dachshund', 'Clever, Lively, Stubborn, and Devoted. Not the greates with kids.', '../public/assets/images/Dachshund.jpg')
('Jade', 1, 'Female', 'Pomeranian', 'Extroverted, intelligent, and playful. Play will take care of a lot of exercise needs. Not the greates with kids.', '../public/assets/images/Pomeranian.jpg')
