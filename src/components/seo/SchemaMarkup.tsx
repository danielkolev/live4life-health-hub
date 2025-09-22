
import React, { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'MedicalOrganization' | 'LocalBusiness' | 'WebPage';
  data: any;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [data]);

  return null;
};

export default SchemaMarkup;
