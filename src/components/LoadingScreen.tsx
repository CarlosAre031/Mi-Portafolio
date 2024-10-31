import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 30);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background dark:bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-40 h-40"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            {[...Array(2)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full border-4 border-primary dark:border-primary rounded-full opacity-75"
                animate={{ scale: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.8,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  delay: index * 0.7,
                }}
              />
            ))}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary dark:bg-primary rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, ease: 'linear', repeat: Infinity }}
            />
          </motion.div>

          <div className="mt-8 w-3/4 h-2 bg-gray-300 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary dark:bg-primary"
              style={{ width: `${progress}%` }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 3, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
