export const becomeAVolunteer = (
  departement,
  name,
  email,
  phone,
  qualification,
  age,
  description
) => {
  return `<html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Business Inquiry Confirmation</title>
  </head>
  
  <body style="margin: 0; padding: 1rem 0; font-family: 'Poppins', sans-serif; background-color: #f3f4f6; color: #333;">
      <center>
          <div style="padding-block:5rem; max-width: 700px; margin: 40px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden; animation: fadeIn 1s ease-in-out; text-align: left;">
              <div style="background-color: #ffffff; color: #000000; padding: 20px; border-bottom: 3px solid #000000;">
                  <h1 style="margin: 0;">Become a Volunteer</h1>
              </div>
  
              <div style=" animation: fadeIn 1s ease-in-out;">
                  <ul style="font-size: 16px; line-height: 1.6; margin: 0; padding-left: 20px;">
                      <li><strong>Name:</strong> ${name}</li>
                      <li><strong>Email:</strong> ${email}</li>
                      <li><strong>Phone Number:</strong> ${phone}</li>
                      <li><strong>Department:</strong> ${departement}</li>
                      <li><strong>Qualification:</strong> ${qualification}</li>
                      <li><strong>Age:</strong> ${age}</li>
                      <li><strong>Description:</strong> ${description}</li>
                  </ul>
              </div>
              <div style="background-color: #ffffff; color: #000000; padding: 20px; border-top: 3px solid #000000;">
                  <p>Powered By <a href="https://crunchcraft.com/" style="text-decoration: none;">
                  Crunch craft</a></p>
              </div>
          </div>
      </center>
  </body>
  
  </html>
  `;
};
