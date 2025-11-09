import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import prashanthMenezes from "@/assets/speakers/prashanth-menezes.jpg";
import muhammedMusthafa from "@/assets/speakers/muhammed-musthafa.jpg";
import subrataKundu from "@/assets/speakers/subrata-kundu.jpg";
import rochanSinha from "@/assets/speakers/rochan-sinha.jpg";
import vGanesh from "@/assets/speakers/v-ganesh.jpg";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Prashanth Menezes",
      title: "Keynote Speaker",
      affiliation: "Head of Department - Materials Chemistry for Catalysis, Helmholtz-Zentrum Berlin & Group Leader, Technische Universität Berlin",
      expertise: "Materials Chemistry, Photo- and Electro-catalysis, Water Splitting, OER and ORR",
      email: "prashanth.menezes@mailbox.tu-berlin.de",
      image: prashanthMenezes,
      bio: "Extensive expertise in Crystallization, Solid State, Structural and Inorganic Materials Chemistry with focus on development of novel functional materials for industrial applications."
    },
    {
      name: "Dr. Muhammed Musthafa",
      title: "Keynote Speaker",
      affiliation: "Professor, Department of Chemistry, IISER, Pune",
      expertise: "Fuel Cell Electrocatalysis, Li-air Batteries, Electrochemical Spectroscopy",
      email: "musthafa@iiserpune.ac.in",
      image: muhammedMusthafa,
      bio: "PhD from IISc Bangalore, explored bi-functional mechanisms in fuel cell electrocatalysis. Postdoctoral research at University of St. Andrews, UK on Li-air battery stability."
    },
    {
      name: "Dr. Subrata Kundu",
      title: "Invited Speaker",
      affiliation: "Senior Principal Scientist, CSIR-Central Electrochemical Research Institute (CECRI), Karaikudi",
      expertise: "Nanomaterials, Electrocatalysis, Energy Materials, Biosensors",
      email: "skundu@cecri.res.in",
      image: subrataKundu,
      bio: "Distinguished senior scientist with PhD from IIT Kharagpur. Journal Associate Editor for Journal of Materials Chemistry A, Materials Advances & Scientific Reports. Top 2% of world scientists in energy materials."
    },
    {
      name: "Dr. Rochan Sinha",
      title: "Invited Speaker",
      affiliation: "Co-founder and CTO, Newtrace, Bengaluru",
      expertise: "Renewable Energy Storage, Solid-state Technologies, Novel Materials Development",
      email: "rochan@newtrace.io",
      image: rochanSinha,
      bio: "J.N. Tata fellow with 9+ years of experience in development of novel materials for renewable energy storage and generation technologies."
    },
    {
      name: "Dr. V. Ganesh",
      title: "Invited Speaker",
      affiliation: "Senior Principal Scientist & Professor, CSIR-CECRI, Karaikudi",
      expertise: "Electroanalytical Chemistry, Electrocatalysis, Energy Conversion and Storage, Nanomaterials",
      email: "vganesh.cecri@csir.res.in",
      image: vGanesh,
      bio: "PhD from Raman Research Institute, Bangalore. Over 130 publications in international journals. CSIR Young Scientist Award winner. Top 2% of world scientists in energy materials since 2020."
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Keynote Speakers</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ICSEET-2025 will feature distinguished speakers from academia and industry who are leaders 
              in sustainable energy and environmental technologies.
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                      <p className="text-primary font-semibold mb-2">{speaker.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">{speaker.affiliation}</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-semibold">Expertise:</span> {speaker.expertise}
                      </p>
                      {speaker.email && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          <a href={`mailto:${speaker.email}`} className="hover:text-primary">
                            {speaker.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  {speaker.bio && (
                    <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
                      {speaker.bio}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Previous Conference Highlights</h3>
              <p className="text-muted-foreground mb-4">
                Our previous conference featured renowned experts from leading institutions worldwide, 
                including representatives from:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                <li>• International research institutions</li>
                <li>• Leading universities</li>
                <li>• Industry leaders in renewable energy</li>
                <li>• Environmental technology companies</li>
                <li>• Government research organizations</li>
                <li>• Sustainability consultancies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
