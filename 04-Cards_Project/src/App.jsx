import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./Components/Card";
import User from "./Components/User";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhqOC_8TpCUmksmFEIm1YqtkLvN8N-S1dew&s",
      company: "Google",
      posted: "5 days ago",
      role: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      company: "Amazon",
      posted: "2 weeks ago",
      role: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
      company: "Microsoft",
      posted: "1 week ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      company: "Meta",
      posted: "3 days ago",
      role: "React Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Remote (India)",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      company: "Netflix",
      posted: "10 days ago",
      role: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
      company: "Apple",
      posted: "4 weeks ago",
      role: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGtN85PJ-mHVr-C04pXsBkeeTvq4sG0DIeQ&s",
      company: "Tesla",
      posted: "6 days ago",
      role: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs74LlfSHt4a4fbdS0tPqGVCYJfXgIJX3Dw&s",
      company: "Adobe",
      posted: "8 days ago",
      role: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoU4xXyUBeOQbhMK6ZvlIGAsOmk-GaCMPM9Q&s",
      company: "Uber",
      posted: "2 days ago",
      role: "Software Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujOkdW7NbL4MGxKaqcyXe-N5_T_TaXBNc5w&s",
      company: "Airbnb",
      posted: "3 weeks ago",
      role: "Backend Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Remote (India)",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((elem) => {

        return (
          <>
            <Card
              brandLogo={elem.brandLogo}
              posted={elem.posted}
              role={elem.role}
              tag1={elem.tag1}
              pay={elem.pay}
              location={elem.location}
              tag2={elem.tag2}
              company={elem.company}
            ></Card>
          </>
        );
      })}
    </div>
  );
};

export default App;
