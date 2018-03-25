//Including dependency
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define('Person', {
      person_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_age: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    });
    return Person;

    var Dog = sequelize.define('Dog', {
        dog_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_age: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_sex: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_breed: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_sponsorName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_sponsorEmail: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_sponsorPhone: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_sponsorAddress: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_city: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_state: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_zipcode: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_facts: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        dog_facts: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        }
      });
      return Dog;
};



// //Insertion of data into database
// sequelize.sync().success(function () {
//     Person.create([
//         {
//             person_id: 1,
//             person_firstname: 'Deric', 
//             person_lastname: 'Lewis', 
//             person_age: 24, 
//             person_email: 'dlewis@aol.com', 
//             person_phone: '912-123-4321', 
//             person_address: '2478 Memorial Lane', 
//             person_city: 'Pooler', 
//             person_state: 'GA', 
//             person_zipcode: '31322', 
//             person_image: '../public/assets/images/Deric-Lewis.jpg'
//         },
//         {
//             person_id: 2,
//             person_firstname: 'Samantha',
//             person_lastname: 'Davis', 
//             person_age: 31, 
//             person_email: 'samdav@hotmail.com', 
//             person_phone: '701-321-1234', 
//             person_address: '319 Old Galvin Rd.', 
//             person_city: 'Fargo', 
//             person_state: 'ND', 
//             person_zipcode: '58102', 
//             person_image: '../public/assets/images/Samantha-Davis.jpg'
//         },
//         {
//             person_id: 3,
//             person_firstname: 'Carter',
//             person_lastname: 'Lowe', 
//             person_age: 26, 
//             person_email: 'clowe@gmail.com', 
//             person_phone: '586-231-3421', 
//             person_address: '383 Cactus Ave.', 
//             person_city: 'Zeeland', 
//             person_state: 'MI', 
//             person_zipcode: '49464', 
//             person_image: '../public/assets/images/Carter-Lowe.jpg'
//         },
//         {
//             person_id: 4,
//             person_firstname: 'Jerry',
//             person_lastname: 'Turnip', 
//             person_age: 36, 
//             person_email: 'jturnip@bellsouth.net', 
//             person_phone: '757-213-4231', 
//             person_address: '7889 Greenview Dr.', 
//             person_city: 'Roanoke', 
//             person_state: 'VA', 
//             person_zipcode: '24012', 
//             person_image: '../public/assets/images/Jerry-Turnip.jpg'
//         },
//         {
//             person_id: 5,
//             person_firstname: 'Turner', 'Classic', 35, 'tclass@att.net', '947-345-5432', '668 Cedar Swamp Street', 'Lansing', 'MI', '48910', '../public/assets/images/Turner-Classic.jpg'
//             person_lastname: 'Davis', 
//             person_age: 31, 
//             person_email: 'samdav@hotmail.com', 
//             person_phone: '701-321-1234', 
//             person_address: '319 Old Galvin Rd.', 
//             person_city: 'Fargo', 
//             person_state: 'ND', 
//             person_zipcode: '58102', 
//             person_image: '../public/assets/images/Samantha-Davis.jpg'
//         },
//         {
//             person_id: 6,
//             person_firstname: 'Lori', 'Lumpkin', 49, 'lori@msn.com', '616-657-5783', '230 Hamilton Ave.', 'Zeeland', 'MI', '49464', '../public/assets/images/Lori-Lumpkin.jpg'
//             person_lastname: 'Davis', 
//             person_age: 31, 
//             person_email: 'samdav@hotmail.com', 
//             person_phone: '701-321-1234', 
//             person_address: '319 Old Galvin Rd.', 
//             person_city: 'Fargo', 
//             person_state: 'ND', 
//             person_zipcode: '58102', 
//             person_image: '../public/assets/images/Samantha-Davis.jpg'
//         },
//         {
//             person_id: 7,
//             person_firstname: 'John', 'East', 'jeast@yahoo.com', '347-233-9475', '9860 Tailwater Street', 'Elmhurst', 'NY', '11373', '../public/assets/images/John-East.jpg'
//             person_lastname: 'Davis', 
//             person_age: 31, 
//             person_email: 'samdav@hotmail.com', 
//             person_phone: '701-321-1234', 
//             person_address: '319 Old Galvin Rd.', 
//             person_city: 'Fargo', 
//             person_state: 'ND', 
//             person_zipcode: '58102', 
//             person_image: '../public/assets/images/Samantha-Davis.jpg'
//         },
//         {
//             person_id: 8,
//             person_firstname: 'Maghan', 'Jhon',33, 'mjhon@icloud.com', '405-436-2113', '98 King Lane', 'Ada', 'OK', '74820',  '../public/assets/images/Maghan-Jhon.jpg'
//             person_lastname: 'Davis', 
//             person_age: 31, 
//             person_email: 'samdav@hotmail.com', 
//             person_phone: '701-321-1234', 
//             person_address: '319 Old Galvin Rd.', 
//             person_city: 'Fargo', 
//             person_state: 'ND', 
//             person_zipcode: '58102', 
//             person_image: '../public/assets/images/Samantha-Davis.jpg'
//         },
//         {
//             person_id: 9,
//             person_firstname: 'Matt', 'Murdock', 40, 'matt@live.com', '480-668-3425', '623 Bishop Lane', 'Chandler', 'AZ', '85224', '../public/assets/images/Matt-Murdock.jpg'
//             person_lastname: 'Davis', 
//             person_age: 31, 
//             person_email: 'samdav@hotmail.com', 
//             person_phone: '701-321-1234', 
//             person_address: '319 Old Galvin Rd.', 
//             person_city: 'Fargo', 
//             person_state: 'ND', 
//             person_zipcode: '58102', 
//             person_image: '../public/assets/images/Samantha-Davis.jpg'
//         },
//         {
//             person_id: 10,
//             person_firstname: 'Jane', 'West', 29, 'jwest@outlook.com', '305-219-3498', '969 Nichols St.', 'Middleburg', 'FL', '32068', '../public/assets/images/Jane-West.jpg'
//             person_lastname: 'Davis', 
//             person_age: 31, 
//             person_email: 'samdav@hotmail.com', 
//             person_phone: '701-321-1234', 
//             person_address: '319 Old Galvin Rd.', 
//             person_city: 'Fargo', 
//             person_state: 'ND', 
//             person_zipcode: '58102', 
//             person_image: '../public/assets/images/Samantha-Davis.jpg'
//         }
//     ]).success(function (data) {
//     console.log(data.values)
//    })
// });

//Reading All Data
//Getting all data
// Item.find({}).complete(function (err,data) {
//     console.log(data);
// });
//With where condition
// Item.find({where:{name:'Laptop'}}).complete(function (err, data) {
//     console.log(data);
// });