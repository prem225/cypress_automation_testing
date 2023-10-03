import  mysql  from "mysql2";

export function randomInt(): number {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomString(): string {
  const letters = "ABCDEFGHIKJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < letters.length; i++) {
    const random = Math.floor(Math.random() * letters.length);
    result += letters.charAt(random);
  }
  return result;
}

export function queryTestDb(query: any, config: any): any {
  const connection = mysql.createConnection(config.env.db); //adding db credentials to create connection with cypress
  connection.connect() // initiating connection
  return new Promise((resolve, reject)=>{
    connection.query(query,(error, results)=>{
      if(error) reject(error);
      else{
        connection.end()
        return resolve(results)
      }
    })
  })
}