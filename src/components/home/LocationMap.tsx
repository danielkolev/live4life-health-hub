import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
const LocationMap = () => {
  return <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как да ни намерите</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Медицински Център Live4Life се намира в ж.к. Студентски комплекс, ул. Христо Данов 11, вх. Г, София, България
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <img alt="Вход на медицински център Live4Life" className="w-full h-full object-cover" src="/lovable-uploads/401a9304-2236-4478-9e46-74d49820bdb8.jpg" />
              </AspectRatio>
            </CardContent>
          </Card>
          
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Нашият адрес</h3>
              <p className="text-gray-600 mb-4">
                ж.к. Студентски комплекс, ул. Христо Данов 11, вх. Г
                <br />София, България
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Телефон:</span> +359 89 020 9898<br />
                <span className="font-semibold">Имейл:</span> lifeforlife@abv.bg
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.383154956611!2d23.354954099999994!3d42.6492958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa847a3f7cc6b7%3A0x6c41af01794a3dab!2sul.%20%22Hristo%20Danov%22%2011%2C%201700%20Studentski%20Kompleks%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1713804592863!5m2!1sen!2sbg" width="100%" height="450" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Live4Life Medical Center Location"></iframe>
        </div>
      </div>
    </section>;
};
export default LocationMap;