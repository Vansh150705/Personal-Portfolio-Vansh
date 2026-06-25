import { useEffect, useState } from 'react';

/**
 * Cycles through `words`, typing and deleting each. Returns the current text.
 * Self-contained so we control the amber caret separately in the markup.
 */
export default function useTypewriter(words, { type = 75, erase = 40, hold = 1800 } = {}) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let delay = deleting ? erase : type;

    if (!deleting && text === word) {
      delay = hold;
    } else if (deleting && text === '') {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
        return;
      }
      const next = deleting
        ? word.slice(0, text.length - 1)
        : word.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, i, words, type, erase, hold]);

  return text;
}
