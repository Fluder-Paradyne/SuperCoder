import React from 'react';
import { useTerminal } from '@/hooks/useTerminal';

const commands = {
  help: 'Available commands: help, echo, clear',
  'echo Hello': 'Hello',
  clear: '\x1Bc',
};

const TerminalComponent: React.FC = () => {
  const terminalRef = useTerminal(commands);

  return <div ref={terminalRef} className={'h-full w-full rounded-b-lg'} />;
};

export default TerminalComponent;