# <p align="center">PerfectFit.ai</p>

<p align="center">
    <img src="https://github.com/user-attachments/assets/9c405717-8db3-41ed-a313-d6859612cc4e" alt="Logo" width="250px"/>
</p>

<p align="center">
    <a href="https://github.com/SusheelThapa/perfectFit.ai/" target="blank">
        <img src="https://img.shields.io/github/watchers/SusheelThapa/perfectFit.ai?style=for-the-badge&logo=appveyor" alt="Watchers"/>
    </a>
    <a href="https://github.com/SusheelThapa/perfectFit.ai/fork" target="blank">
        <img src="https://img.shields.io/github/forks/SusheelThapa/perfectFit.ai?style=for-the-badge&logo=appveyor" alt="Forks"/>
    </a>
    <a href="https://github.com/SusheelThapa/perfectFit.ai/stargazers" target="blank">
        <img src="https://img.shields.io/github/stars/SusheelThapa/perfectFit.ai?style=for-the-badge&logo=appveyor" alt="Star"/>
    </a>
</p>

<p align="center">
    <a href="https://github.com/SusheelThapa/perfectFit.ai/issues" target="blank">
        <img src="https://img.shields.io/github/issues/SusheelThapa/perfectFit.ai.svg?style=for-the-badge&logo=appveyor" alt="Issue"/>
    </a>
    <a href="https://github.com/SusheelThapa/perfectFit.ai/pulls" target="blank">
        <img src="https://img.shields.io/github/issues-pr/SusheelThapa/perfectFit.ai.svg?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
    </a>
</p>

<p align="center">
    <a href="https://github.com/SusheelThapa/perfectFit.ai/blob/master/LICENSE" target="blank">
        <img src="https://img.shields.io/github/license/SusheelThapa/perfectFit.ai?style=for-the-badge&logo=appveyor" alt="License" />
    </a>
</p>

<p align="center">
    <strong>PerfectFit.ai</strong> is an innovative solution that simplifies finding the right clothing size based on individual weight and height. By leveraging <strong>MindsDB</strong> and enhancing interactions with <strong>GSAP</strong>, it provides users with accurate size recommendations effortlessly. The project aims to enhance shopping experiences by reducing the guesswork involved in selecting the perfect fit, ultimately saving time and improving customer satisfaction.
</p>

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Problem Statement](#problem-statement)
- [Dataset](#dataset)
- [Clothing Size Conversion](#clothing-size-conversion)
- [Contributing](#contributing)
- [License](#license)

## Demo

Coming soon....

## Installation

For the installation guide, check out [INSTALLATION.md](./INSTALLATION.md).

## Dependencies

- [**MindsDB**](https://mindsdb.com/): Used for predictive modeling to provide accurate size recommendations.
- **GSAP**: Used for enhancing animation and interaction within the application.

## Problem Statement

1. **Challenge**: Fashion retail faces significant issues with inconsistent sizing standards across brands and regions.

2. **Impact**: Up to 85% of online shoppers hesitate to purchase due to uncertainty about sizing, leading to high return rates averaging around 30% in the apparel industry.

3. **Customer Difficulty**: Customers struggle to find well-fitting clothing based on standard size charts, leading to frustration and increased return rates.

4. **Solution Opportunity**: Developing personalized solutions based on individual body measurements can enhance customer satisfaction and potentially reduce return rates and operational costs for retailers.

5. **Dataset Importance**: Access to comprehensive datasets containing clothing measurements and size charts is crucial for developing accurate size prediction models.

## Addressing the Challenges with PerfectFit.ai

PerfectFit.ai addresses these challenges by leveraging aMindsDB for predictive modeling and GSAP for enhanced user interactions. By analyzing individual weight and height data, PerfectFit.ai provides personalized size recommendations that mitigate the uncertainties of traditional size charts. This approach not only improves customer satisfaction by ensuring better-fitting clothing but also aims to reduce return rates significantly, thereby optimizing operational efficiency for retailers. Access to comprehensive datasets further enhances the accuracy of size predictions, ensuring a seamless and tailored shopping experience for users.

## Dataset

The dataset used for this project is sourced from [Kaggle](https://www.kaggle.com/datasets/tourist55/clothessizeprediction/data), specifically tailored for predicting clothing sizes. It includes relevant metrics and attributes necessary for training and validating the size prediction model.

## Clothing Size Conversion

| Asian Size | USA, Canada | Standard EU | Australia, UK | Italy | France |
| ---------- | ----------- | ----------- | ------------- | ----- | ------ |
| XS         | XS - 0-2    | XXS – 32    | 4             | 38    | 34     |
| S          | S - 4       | XS – 34     | 6             | 40    | 36     |
| M          | S - 6       | S – 36      | 8             | 42    | 38     |
| L          | M - 8       | M – 38      | 10            | 44    | 40     |
| XL         | M - 10      | L – 40      | 12            | 46    | 42     |
| XXL        | L - 12      | XL – 42     | 14            | 48    | 44     |
| 3XL        | L - 14      | XXL – 44    | 16            | 50    | 46     |
| 4XL        | XL - 16     | 3XL – 46    | 18            | 52    | 48     |
| 5XL        | XXL - 18    | 4XL – 48    | 20            | 54    | 50     |
| 6XL        | XXL - 20    | 5XL – 50    | 22            | 56    | 52     |

_Source: [Fashion Chingu Size Conversion Chart](https://www.fashionchingu.com/size-conversion-chart/)_

## Contributing

We welcome contributions to enhance and improve [perfectFit.ai](CONTRIBUTING.md)! Feel free to submit issues, feature requests, or pull requests. Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](/LICENSE).
