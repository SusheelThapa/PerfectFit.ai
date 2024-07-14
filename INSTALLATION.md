# Installation

## MindsDB Docker

1. Install [Docker](https://www.docker.com/) on your machine.

2. Run the following command to create a Docker container with MindsDB:

   ```sh
   docker run --name mindsdb_container_lightwood -p 47334:47334 -p 47335:47335 mindsdb/mindsdb:lightwood
   ```

### Upload Dataset

1. Navigate to [http://localhost:47334/](http://localhost:47334/).

2. Upload the [dataset](./datasets/cloth_size.csv) in the **MindsDB** editor.

   <p align="center">
      <img src="https://github.com/user-attachments/assets/4d7777e6-76b6-44b9-889a-a595c8a28ec1" alt="Upload Dataset" width="600">
   </p>

3. Run the following queries to check if the dataset is uploaded correctly:

   ```sql
   SHOW TABLES FROM files;

   SELECT * FROM files.cloth_size LIMIT 10;
   ```

### Create and Train Model

1. Create and train the model using the following query:

   ```sql
   CREATE PREDICTOR mindsdb.cloth_predictor
   FROM files
   (SELECT * FROM cloth_size LIMIT 10000)
   PREDICT size;
   ```

2. Describe the model and its features:

   ```sql
   DESCRIBE cloth_predictor;
   DESCRIBE cloth_predictor.features;
   ```

3. Check the status of the model:

   ```sql
   SELECT status
   FROM mindsdb.models
   WHERE name='cloth_predictor';
   ```

<p align="center">
   <img src="https://github.com/user-attachments/assets/ffd6f553-d940-49d3-b4f8-11d616754efc" alt="Create and Train Model" width="600">
</p>

### Predicting Size using Trained Model

1. Use the trained model to predict the size with the following query:

   ```sql
   SELECT size
   FROM mindsdb.cloth_predictor
   WHERE weight = 60
   AND age = 23
   AND height = 154.94;
   ```

   <p align="center">
      <img src="https://github.com/user-attachments/assets/14f0b310-958e-4c4f-a81f-2f54cf3d3be2" alt="Predict Size" width="600">
   </p>

## Backend

1. Install [nodejs](https://nodejs.org/en) into your machine.

2. Navigate to `backend/` folder

   ```bash
   cd backend
   ```

3. Install the required packages.

   ```bash
   npm install
   ```

4. Run the backend server

   ```bash
   npm run dev
   ```

## Frontend

1. Navigate to `frontend/` folder

   ```bash
   cd frontend
   ```

2. Install the required packages.

   ```bash
   npm install
   ```

3. Run the frontend server

   ```bash
   npm run dev
   ```

4. You can view the live website on `http://localhost:5173/`
