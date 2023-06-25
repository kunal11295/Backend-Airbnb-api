import encrypt from "encryptjs";
import Users from "../modals/user.js";
import axios from "axios";

export const register = async (req,res) =>
{
    try{

        const {name,email,password} = req.body

        var secretkey ='kunal'; 
        var plaintext = password;
        var ciphertext = encrypt.encrypt(plaintext,secretkey,256);
    
        const user = new Users
        ({
            name,
            email,
            password:ciphertext
        })
        await user.save();
        return res.send("Registration succesfull");
    }
    catch(err)
    {
        return res.send(err);
    }
}


export const searchbylocation = async (req,res) =>
{
    try{
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-location',
            params: {
              location: 'Paris',
              checkin: '2023-09-16',
              checkout: '2023-09-17',
              adults: '1',
              children: '0',
              infants: '0',
              pets: '0',
              page: '1',
              currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
              const response = await axios.request(options);
              console.log(response.data);
              return res.send(response.data)
          } catch (error) {
              console.error(error);
          }
    }


    export const Calendar = async (req,res) =>
    {
        try{
            const options = {
                method: 'GET',
                url: 'https://airbnb13.p.rapidapi.com/calendar',
                params: {
                  room_id: '18951965',
                  currency: 'USD',
                  year: '2023',
                  month: '12',
                  count: '1'
                },
                headers: {
                  'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
                  'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
                }
              };
                  const response = await axios.request(options);
                  console.log(response.data);
                  return res.send(response.data)
              } catch (error) {
                  console.error(error);
              }
        }


   export const Autocomplete = async (req,res) =>
   {
     try{
        const{city} = req.body
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/autocomplete',
            params: {query: 'city'},
            headers: {
              'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
              const response = await axios.request(options);
              console.log(response.data);
              return res.send(response.data)
          } catch (error) {
              console.error(error);
          }
     } 


     export const searchbygeoLocation = async (req,res) =>
     {
        try{
            const options = {
                method: 'GET',
                url: 'https://airbnb13.p.rapidapi.com/autocomplete',
                params: {query: 'paris'},
                headers: {
                  'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
                  'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
                }
              };
                  const response = await axios.request(options);
                  console.log(response.data);
                  return res.send(response.data)
              } catch (error) {
                  console.error(error);
              }
        }