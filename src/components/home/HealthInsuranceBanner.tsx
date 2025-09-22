import React from "react";
import { Shield, CheckCircle } from "lucide-react";

const HealthInsuranceBanner = () => {
  return (
    <section className="bg-primary/5 border-t border-b border-primary/20 py-4">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4 text-center">
          <Shield className="h-6 w-6 text-primary flex-shrink-0" />
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="text-lg font-semibold text-secondary-dark">
              Медицинският център работи със здравна каса
            </span>
            <div className="flex items-center gap-1 text-primary">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Договор с НЗОК</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsuranceBanner;