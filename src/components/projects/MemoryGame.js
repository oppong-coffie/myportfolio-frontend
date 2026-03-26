import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Trophy, Brain, Target, Star, Heart, Cloud, Sun, Moon, Zap } from 'lucide-react';

const icons = [
  { icon: Brain, color: 'text-purple-500' },
  { icon: Target, color: 'text-red-500' },
  { icon: Star, color: 'text-yellow-500' },
  { icon: Heart, color: 'text-pink-500' },
  { icon: Cloud, color: 'text-blue-500' },
  { icon: Sun, color: 'text-orange-500' },
  { icon: Moon, color: 'text-indigo-500' },
  { icon: Zap, color: 'text-cyan-500' }
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const initializeGame = () => {
    const shuffledCards = [...icons, ...icons]
      .map((item, index) => ({ ...item, id: index, isMatched: false }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setScore(0);
    setGameStarted(true);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].icon === cards[second].icon) {
        setMatchedCards(prev => [...prev, first, second]);
        setScore(prev => prev + 10);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return;
    setFlippedCards(prev => [...prev, index]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4"
          >
            <Brain size={16} className="text-primary" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary/70 font-bold">Interactive Lab</span>
          </motion.div>
          <h2 className="text-5xl font-black tracking-tight mb-4 uppercase italic">
            Memory <span className="text-primary">Vault.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            A high-performance reactive memory game built to demonstrate state management and fluid animations.
          </p>
        </header>

        {/* Stats Section */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Moves</span>
            <span className="text-3xl font-black text-gray-900">{moves}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Score</span>
            <span className="text-3xl font-black text-primary">{score}</span>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={initializeGame}
              className="p-3 bg-gray-900 text-white rounded-2xl hover:bg-primary transition-colors shadow-lg group"
              title="Reset Game"
            >
              <RefreshCw size={24} className="group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Game Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto"
        >
          {cards.map((card, index) => {
            const isFlipped = flippedCards.includes(index) || matchedCards.includes(index);
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(index)}
                className="relative aspect-square cursor-pointer perspective-1000"
              >
                <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front (Hidden) */}
                  <div className="absolute inset-0 bg-gray-100 border-2 border-gray-200 rounded-3xl flex items-center justify-center backface-hidden shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-gray-200/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                    </div>
                  </div>

                  {/* Back (Icon) */}
                  <div className="absolute inset-0 bg-white border-2 border-primary/20 rounded-3xl flex items-center justify-center rotate-y-180 backface-hidden shadow-xl">
                    <Icon size={40} className={card.color} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Victory Message */}
        <AnimatePresence>
          {matchedCards.length === cards.length && gameStarted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md"
            >
              <div className="bg-white rounded-[3rem] p-12 text-center shadow-2xl max-w-md w-full border border-gray-100">
                <div className="w-24 h-24 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Trophy size={48} className="text-yellow-500" />
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2 uppercase italic tracking-tight">Vault Secured</h3>
                <p className="text-gray-500 font-medium mb-10">You've successfully cleared the memory grid with {moves} moves!</p>
                <button
                  onClick={initializeGame}
                  className="w-full py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform"
                >
                  Play Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemoryGame;
