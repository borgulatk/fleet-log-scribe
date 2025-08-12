import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-fleet-primary to-fleet-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Fleet Management?
        </h2>
        
        <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
          Join thousands of fleet managers who have streamlined their operations with our comprehensive vehicle tracking and maintenance platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto bg-white text-fleet-primary hover:bg-white/90">
            <UserPlus className="mr-2 h-5 w-5" />
            Create Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10">
            <LogIn className="mr-2 h-5 w-5" />
            Sign In
          </Button>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-fleet-secondary rounded-full"></div>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-fleet-secondary rounded-full"></div>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-fleet-secondary rounded-full"></div>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;