import 'package:flutter/material.dart';

void main() {
  runApp(AirViewApp());
}

class AirViewApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Air View - Travel Agency',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'System',
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Background Image
          Container(
            decoration: BoxDecoration(
              image: DecorationImage(
                image: NetworkImage(
                  'https://images.unsplash.com/photo-1639616322896-357c8e5a449a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMGNpdHklMjBsaWdodHMlMjB0cmF2ZWx8ZW58MXx8fHwxNzU2NDYxMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
                ),
                fit: BoxFit.cover,
              ),
            ),
          ),
          
          // Gradient Overlay
          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Color.fromRGBO(30, 58, 138, 0.6),
                  Color.fromRGBO(30, 64, 175, 0.5),
                  Color.fromRGBO(234, 88, 12, 0.7),
                ],
              ),
            ),
          ),
          
          // Content
          SafeArea(
            child: SingleChildScrollView(
              child: Column(
                children: [
                  HeaderWidget(),
                  HeroSection(),
                  ServicesSection(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class HeaderWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 24, vertical: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Logo
          Row(
            children: [
              Icon(
                Icons.airplanemode_active,
                color: Colors.white,
                size: 32,
              ),
              SizedBox(width: 8),
              Text(
                'AIR VIEW',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ),
          
          // Navigation Links
          if (MediaQuery.of(context).size.width > 768)
            Row(
              children: [
                NavLink(text: 'Home'),
                SizedBox(width: 32),
                NavLink(text: 'Services'),
                SizedBox(width: 32),
                NavLink(text: 'About'),
              ],
            ),
        ],
      ),
    );
  }
}

class NavLink extends StatelessWidget {
  final String text;
  
  const NavLink({Key? key, required this.text}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: Text(
        text,
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
    );
  }
}

class HeroSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isTablet = screenWidth > 768;
    final isDesktop = screenWidth > 1024;
    
    return Container(
      height: MediaQuery.of(context).size.height - 100,
      padding: EdgeInsets.symmetric(horizontal: 24),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Main Title
            Text(
              'Travel with Us,\nExperience the Best',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: isDesktop ? 72 : (isTablet ? 60 : 40),
                fontWeight: FontWeight.bold,
                height: 1.2,
              ),
            ),
            
            SizedBox(height: 48),
            
            // Action Buttons
            Wrap(
              alignment: WrapAlignment.center,
              spacing: 16,
              runSpacing: 16,
              children: [
                ActionButton(
                  text: 'Book Now',
                  isPrimary: true,
                ),
                ActionButton(
                  text: 'Get Visa',
                  isPrimary: false,
                ),
                ActionButton(
                  text: 'Explore Packages',
                  isPrimary: false,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class ActionButton extends StatelessWidget {
  final String text;
  final bool isPrimary;
  
  const ActionButton({
    Key? key,
    required this.text,
    required this.isPrimary,
  }) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 56,
      child: ElevatedButton(
        onPressed: () {},
        style: ElevatedButton.styleFrom(
          backgroundColor: isPrimary ? Colors.white : Colors.white.withOpacity(0.2),
          foregroundColor: isPrimary ? Colors.black : Colors.white,
          side: isPrimary ? null : BorderSide(color: Colors.white.withOpacity(0.3)),
          padding: EdgeInsets.symmetric(horizontal: 32, vertical: 12),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        ),
        child: Text(
          text,
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
    );
  }
}

class ServicesSection extends StatelessWidget {
  final List<ServiceItem> services = [
    ServiceItem(
      icon: Icons.airplanemode_active,
      title: 'Air Ticket',
      subtitle: 'Booking',
    ),
    ServiceItem(
      icon: Icons.description,
      title: 'Visa',
      subtitle: 'Assistance',
    ),
    ServiceItem(
      icon: Icons.apartment,
      title: 'Hotel',
      subtitle: 'Booking',
    ),
    ServiceItem(
      icon: Icons.beach_access,
      title: 'Holiday',
      subtitle: 'Packages',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    int crossAxisCount = 1;
    
    if (screenWidth > 1024) {
      crossAxisCount = 4;
    } else if (screenWidth > 640) {
      crossAxisCount = 2;
    }
    
    return Container(
      padding: EdgeInsets.all(24),
      child: Column(
        children: [
          // Section Title
          Text(
            'Our Services',
            style: TextStyle(
              color: Colors.white,
              fontSize: MediaQuery.of(context).size.width > 768 ? 40 : 36,
              fontWeight: FontWeight.bold,
            ),
            textAlign: TextAlign.center,
          ),
          
          SizedBox(height: 64),
          
          // Services Grid
          GridView.builder(
            shrinkWrap: true,
            physics: NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: crossAxisCount,
              childAspectRatio: 1.2,
              crossAxisSpacing: 32,
              mainAxisSpacing: 32,
            ),
            itemCount: services.length,
            itemBuilder: (context, index) {
              return ServiceCard(service: services[index]);
            },
          ),
        ],
      ),
    );
  }
}

class ServiceItem {
  final IconData icon;
  final String title;
  final String subtitle;
  
  ServiceItem({
    required this.icon,
    required this.title,
    required this.subtitle,
  });
}

class ServiceCard extends StatefulWidget {
  final ServiceItem service;
  
  const ServiceCard({Key? key, required this.service}) : super(key: key);
  
  @override
  _ServiceCardState createState() => _ServiceCardState();
}

class _ServiceCardState extends State<ServiceCard>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _scaleAnimation;
  late Animation<Color?> _colorAnimation;
  
  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(milliseconds: 200),
      vsync: this,
    );
    
    _scaleAnimation = Tween<double>(
      begin: 1.0,
      end: 1.05,
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    ));
    
    _colorAnimation = ColorTween(
      begin: Colors.white,
      end: Colors.lightBlueAccent[100],
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    ));
  }
  
  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
  
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => _controller.forward(),
      onTapUp: (_) => _controller.reverse(),
      onTapCancel: () => _controller.reverse(),
      child: AnimatedBuilder(
        animation: _controller,
        builder: (context, child) {
          return Transform.scale(
            scale: _scaleAnimation.value,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Icon Container
                Container(
                  width: 80,
                  height: 80,
                  margin: EdgeInsets.only(bottom: 24),
                  child: Icon(
                    widget.service.icon,
                    size: 48,
                    color: _colorAnimation.value,
                  ),
                ),
                
                // Title
                Text(
                  widget.service.title,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                
                SizedBox(height: 4),
                
                // Subtitle
                Text(
                  widget.service.subtitle,
                  style: TextStyle(
                    color: Colors.grey[300],
                    fontSize: 18,
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}