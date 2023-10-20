import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/db/teamMembers.json");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);
    res.status(200).json(objectData);
  } else if (req.method === "POST") {
    try {
      const data = req.body;
      // Create new object
      const newData = {
        ...data,
      };
      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(newData);
      // Save data in data.json
      await fsPromises.writeFile(dataFilePath, updatedData);
      // Send a success response
      res.status(200).json({ message: "Data Create successfully" });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: "Error storing data" });
    }
  } else if (req.method === "PUT") {
    try {
      const jsonData = await fsPromises.readFile(dataFilePath);
      const olddata = JSON.parse(jsonData);

      // Get the data from the request body
      const data = req.body;
      // Create new object
      const newData = {
        ...olddata,
        ...data,
      };
      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(newData);
      // Save data in data.json
      await fsPromises.writeFile(dataFilePath, updatedData);
      // Send a success response
      res.status(200).json({ message: "data updated successfully" });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: "Error storing data" });
    }
  }
}
