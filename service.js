const { response } = require('express');
const Db=require("./config");
module.exports={
 Create: (data,callback) => {
        Db.query('insert into land_details(Land_Owned_Or_Leased,Land_District,Land_Taluk,Village,Total_Extent_in_Ha_Acre,Own_Extent_in_Acre,Classification_of_land,Survey_No,Sub_division,Patta_No,Current_land_type,Irrigation_Source,Type_of_Cultivation,Name_of_Crop,Name_of_InterCrop,Date_of_Sowing_Crop,Name_of_CanalWater_WaterResource,Extent_of_Crop_Ha_Acre)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [data.Land_Owned_Or_Leased,data.Land_District,data.Land_Taluk,data.Village,data.Total_Extent_in_Ha_Acre,data.Own_Extent_in_Acredata.Classification_of_Land,data.Survey_No,data.Sub_Division,data.Patta.No,data.Current_Land_Type,
            data.Irrigation_Source,data.Type_of_Cultivation,data.Name_of_crop,data.Name_of_InterCrop,data.Date_of_Sowing_Crop,data.Name_of_CanalWater_WaterResource,data.Extent_of_Crop_Ha_Acre],(error,result,fields)=>{
        if (error) {
            console.log(error);
        } return callback(null,result);
      });
        },
    view:(callback)=>{
            Db.query("select * from land_details",[],(error,result)=>{
              if(error){
                 console.log(error);
                   return callback(error);
                     }return callback("",result);
                    })
                },
          }
      
      