import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-fleet-text mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-fleet-text-light mb-10 max-w-3xl mx-auto">
            Transform your fleet management with our comprehensive platform. 
            Join industry leaders who trust us to optimize their operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-fleet-primary hover:bg-fleet-primary-dark text-white px-8 py-3 text-lg rounded-none">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-fleet-primary text-fleet-primary hover:bg-fleet-primary hover:text-white px-8 py-3 text-lg rounded-none">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;