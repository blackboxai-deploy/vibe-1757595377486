"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

interface QuizResult {
  coffee: string;
  description: string;
  image: string;
  alt: string;
  price: number;
}

export default function CoffeeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What's your preferred coffee strength?",
      options: ["Mild and smooth", "Medium body", "Strong and bold", "Extra strong"]
    },
    {
      id: 2,
      question: "How do you usually drink your coffee?",
      options: ["Black", "With milk/cream", "With sugar", "Specialty drinks (lattes, cappuccinos)"]
    },
    {
      id: 3,
      question: "What time do you typically enjoy coffee?",
      options: ["Early morning boost", "Mid-morning pick-me-up", "Afternoon energy", "Evening relaxation"]
    },
    {
      id: 4,
      question: "Which flavor notes appeal to you?",
      options: ["Fruity and bright", "Nutty and chocolate", "Caramel and sweet", "Earthy and rich"]
    }
  ];

  const getResult = (): QuizResult => {
    // Simple algorithm based on answers
    const answerString = answers.join('');
    
    if (answerString.includes('0') && answerString.includes('0')) {
      return {
        coffee: "Ethiopian Highlands",
        description: "Perfect for those who love bright, fruity flavors with a smooth finish. Your taste preferences align beautifully with our single-origin Ethiopian coffee.",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a342915-487a-4f8c-a8f6-508a835d1d03.png",
        alt: "Ethiopian coffee beans with bright fruity notes, perfect match based on personalized recommendation",
        price: 24.99
      };
    } else if (answerString.includes('2') || answerString.includes('3')) {
      return {
        coffee: "Colombian Supreme",
        description: "Rich and balanced with beautiful complexity. Based on your preferences, this medium-dark roast will give you the perfect balance of flavor and strength.",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5019b1ac-32f6-4134-a033-83e8add1c5db.png",
        alt: "Colombian coffee with rich, balanced complexity, recommended based on quiz results",
        price: 22.99
      };
    } else {
      return {
        coffee: "Brazilian Santos",
        description: "Smooth, creamy, and versatile. Your answers suggest you'd love this crowd-pleasing coffee that works perfectly in any preparation method.",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6b24dcc-b579-43c4-9dbf-1eaf29f74852.png",
        alt: "Brazilian Santos coffee, smooth and creamy, versatile and perfect for your taste preferences",
        price: 19.99
      };
    }
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <section id="quiz" className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Find Your Perfect Coffee
            </h2>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Not sure which coffee to try? Take our personalized quiz and discover 
              the perfect coffee match based on your taste preferences and habits.
            </p>
            
            <Card className="bg-white border-stone-200 shadow-lg max-w-md mx-auto">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">🤔</div>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display' }}>
                  Ready to Discover?
                </CardTitle>
                <CardDescription>
                  4 quick questions to find your ideal coffee
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  onClick={() => setQuizStarted(true)}
                  size="lg"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white font-semibold py-3"
                >
                  Start Coffee Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (showResult) {
    const result = getResult();
    
    return (
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Your Perfect Coffee Match!
            </h2>
            <p className="text-lg text-stone-600">
              Based on your preferences, we recommend:
            </p>
          </div>

          <Card className="bg-white border-stone-200 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <img
                  src={result.image}
                  alt={result.alt}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-3xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  {result.coffee}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {result.description}
                </p>
                <div className="text-3xl font-bold text-amber-800 mb-6">
                  ${result.price}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-amber-800 hover:bg-amber-900 text-white font-semibold"
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={resetQuiz}
                  className="flex-1 border-amber-800 text-amber-800 hover:bg-amber-50"
                >
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Find Your Perfect Coffee
          </h2>
          <div className="w-full bg-stone-200 rounded-full h-2 mb-4">
            <div
              className="bg-amber-800 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-stone-600">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <Card className="bg-white border-stone-200 shadow-lg max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-stone-900" style={{ fontFamily: 'Playfair Display' }}>
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left justify-start p-4 h-auto border-stone-300 hover:bg-amber-50 hover:border-amber-300 transition-colors"
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}