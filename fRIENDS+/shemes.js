const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi)=>({
      
       type: 'string',
       base: joi.string(),
       messages:{
           'string.escapeHTML': '{{#label}} must not include HTML!'
       },
       rules:{
           escapeHTML:{
               validate(value,helpers){
                   const clean = sanitizeHtml(value,{
                       allowedTags: [],
                       allowedAttributes:{},
                   });
                   if(clean !== value) return helpers.error('string.escapeHTML',{value})
                   return clean;
               }
       }
    }
});


const Joi = BaseJoi.extend(extension);

module.exports.ProfileSchema =
    Joi.object({     //Joi  schema to validate input
        Profile: Joi.object({
            description: Joi.string().required().escapeHTML(),
            visibilty: Joi.string().required(),
            Gender: Joi.string().required(),
            dateOfBirth: Joi.string().required().escapeHTML(),
        })
    })

    
module.exports.PostSchema= 
     Joi.object({
         Post: Joi.object({
            title : Joi.string().required().escapeHTML(),
            description: Joi.string().required().escapeHTML()
         }).required()
     })

module.exports.ReviewSchema=
    Joi.object({
        review: Joi.object({
          body: Joi.string().required().escapeHTML()
        }).required()
    })