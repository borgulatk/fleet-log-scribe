import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const brands = [
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Fleet Management",
      subtitle: "comprehensive tracking",
      description: "Advanced fleet management solutions with real-time tracking, maintenance scheduling, and comprehensive analytics for optimal fleet performance.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1065&q=80",
      title: "Digital Solutions",
      subtitle: "smart logistics",
      description: "Digital transformation tools that streamline operations, reduce costs, and improve efficiency across your entire transportation network.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
      title: "Analytics Platform",
      subtitle: "data-driven insights",
      description: "Powerful analytics and reporting tools that provide actionable insights to optimize your fleet operations and maximize ROI.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fleet-text mb-6">
            Discover our solutions
          </h2>
          <p className="text-xl text-fleet-text-light max-w-3xl mx-auto">
            Best in class, innovative fleet management solutions of tomorrow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={brand.image} 
                  alt={brand.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-fleet-text mb-2">
                  {brand.title}
                </CardTitle>
                <p className="text-fleet-primary font-medium text-lg italic">
                  {brand.subtitle}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-fleet-text-light text-base leading-relaxed mb-6">
                  {brand.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="border-fleet-primary text-fleet-primary hover:bg-fleet-primary hover:text-white font-semibold"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;