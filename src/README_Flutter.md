# Air View Travel - Flutter App

A beautiful travel agency mobile application built with Flutter/Dart that replicates the web design with native mobile performance.

## Features

- **Responsive Design**: Adapts to different screen sizes (mobile, tablet, desktop)
- **Beautiful UI**: Stunning background with gradient overlays
- **Smooth Animations**: Interactive service cards with hover effects
- **Material Design**: Following Flutter's material design principles
- **Cross Platform**: Runs on iOS, Android, Web, and Desktop

## Getting Started

### Prerequisites

1. Install Flutter SDK: https://flutter.dev/docs/get-started/install
2. Install an IDE (VS Code, Android Studio, or IntelliJ)
3. Set up an emulator or connect a physical device

### Installation

1. Clone or download the project files
2. Open terminal in the project directory
3. Run the following commands:

```bash
# Get Flutter dependencies
flutter pub get

# Run the app
flutter run
```

### Project Structure

```
lib/
├── main.dart          # Main application entry point
├── widgets/
│   ├── header.dart    # Header widget with navigation
│   ├── hero.dart      # Hero section with title and buttons
│   └── services.dart  # Services grid section
└── models/
    └── service.dart   # Service data model
```

## Customization

### Colors
You can modify the gradient colors in the `HomePage` widget:

```dart
colors: [
  Color.fromRGBO(30, 58, 138, 0.6),  // Top color
  Color.fromRGBO(30, 64, 175, 0.5),  // Middle color
  Color.fromRGBO(234, 88, 12, 0.7),  // Bottom color
],
```

### Background Image
Replace the background image URL in the `HomePage` widget:

```dart
image: NetworkImage('YOUR_IMAGE_URL_HERE'),
```

### Services
Add or modify services in the `ServicesSection` widget:

```dart
final List<ServiceItem> services = [
  ServiceItem(
    icon: Icons.your_icon,
    title: 'Your Service',
    subtitle: 'Description',
  ),
  // Add more services...
];
```

## Building for Production

### Android
```bash
flutter build apk --release
```

### iOS
```bash
flutter build ios --release
```

### Web
```bash
flutter build web --release
```

## Requirements

- Flutter 3.0.0 or higher
- Dart 2.17.0 or higher
- iOS 11.0+ (for iOS deployment)
- Android API level 21+ (for Android deployment)

## License

This project is for educational and demonstration purposes.