import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, ClipboardList, Camera, BarChart3, Shield, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Fleet Tracking",
      description: "Register and manage your entire fleet with detailed vehicle information including fleet numbers and registration details."
    },
    {
      icon: ClipboardList,
      title: "Maintenance Records",
      description: "Document malfunctions, repairs, and maintenance activities with comprehensive record keeping."
    },
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Capture and store visual evidence of vehicle conditions, damages, and maintenance work."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Generate insights from your fleet data to optimize maintenance schedules and reduce costs."
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Role-based access control ensures your fleet data remains secure and accessible only to authorized users."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get instant notifications and updates on vehicle status changes and maintenance requirements."
    }
  ];

  return (
    <section className="py-24 bg-fleet-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fleet-text mb-6">
            Powerful Fleet Management Features
          </h2>
          <p className="text-xl text-fleet-text-light max-w-3xl mx-auto">
            Everything you need to manage your fleet efficiently, from vehicle registration to maintenance tracking and photo documentation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-fleet-surface shadow-[var(--shadow-card)] border-0 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elegant)] hover:transform hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fleet-primary to-fleet-primary-dark rounded-full flex items-center justify-center shadow-[var(--shadow-button)]">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-fleet-text">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fleet-text-light leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;