# HTTP Status Code of the Day Widget

This repository contains a Scriptable script for displaying the "HTTP Status Code of the Day" on iOS devices using the Scriptable app. The widget shows the current day's HTTP status code, its label, and a link to its specification.

## Features

- Fetches the "HTTP Status Code of the Day" from an external API.
- Displays the status code, its label, and the specification link.
- Neatly formatted for iOS home screen widgets.

## Requirements

- iOS device
- [Scriptable app](https://scriptable.app/) installed

## Installation

1. Clone this repository or download the script file.
2. Open the Scriptable app on your iOS device.
3. Create a new script and copy the content of the `statusCodeWidget.js` into it.
4. Run the script once to verify it's working.
5. Add a new Scriptable widget to your home screen and select the `statusCodeWidget` script.

## Usage

After installation, the widget will automatically update to show the current "HTTP Status Code of the Day" as per the API's response. Please note that iOS widgets do not update in real-time and are subject to iOS's widget refresh policies.

## Customization

You can customize the widget by editing the `statusCodeWidget.js` script. Feel free to change the layout, font sizes, or add more information as per the API response.

## Contributing

Contributions to the project are welcome. Please feel free to fork the repository, make changes, and submit pull requests.

## License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of Scriptable for making iOS automation accessible.
- This widget uses the [HTTP Status Code API](https://http-statuscode.com/).

## Contact

For any queries or suggestions, please open an issue on this repository.
