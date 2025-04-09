export const generatePlaceholderImage = (text: string): string => {
  // Creates a colored placeholder image with text
  const canvas = document.createElement('canvas');
  const colors = [
    '#007FFF', // Primary color
    '#6B7280', // Secondary color
    '#10B981', // Success color
    '#F59E0B', // Warning color
    '#EF4444', // Error color
  ];

  canvas.width = 600;
  canvas.height = 338; // 16:9 aspect ratio
  const ctx = canvas.getContext('2d');

  if (!ctx) return '';

  // Random background color
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 32px Inter';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // Add pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  for (let i = 0; i < canvas.width; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }

  return canvas.toDataURL('image/jpeg', 0.8);
};

export const projectImages = {
  'expense-tracker': generatePlaceholderImage('Expense Tracker'),
  'inventory-manager': generatePlaceholderImage('Inventory Manager'),
  'loan-calculator': generatePlaceholderImage('Loan Calculator'),
  'task-manager': generatePlaceholderImage('Task Manager'),
  'shift-scheduler': generatePlaceholderImage('Shift Scheduler'),
};