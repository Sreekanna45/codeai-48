import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { getStoredApiKey, setApiKey, API_KEYS } from '@/utils/apiUtils';

export const ApiKeySettings = () => {
  const [openaiKey, setOpenaiKey] = useState(getStoredApiKey(API_KEYS.OPENAI) || '');
  const [judge0Key, setJudge0Key] = useState(getStoredApiKey(API_KEYS.JUDGE0) || '');
  const { toast } = useToast();

  const handleSave = () => {
    setApiKey(API_KEYS.OPENAI, openaiKey);
    setApiKey(API_KEYS.JUDGE0, judge0Key);
    toast({
      title: "Success",
      description: "API keys saved successfully",
    });
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">API Settings</h3>
      <div className="space-y-2">
        <label className="block text-sm font-medium">OpenAI API Key</label>
        <Input
          type="password"
          value={openaiKey}
          onChange={(e) => setOpenaiKey(e.target.value)}
          placeholder="Enter OpenAI API key"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Judge0 API Key</label>
        <Input
          type="password"
          value={judge0Key}
          onChange={(e) => setJudge0Key(e.target.value)}
          placeholder="Enter Judge0 API key"
        />
      </div>
      <Button onClick={handleSave}>Save API Keys</Button>
    </div>
  );
};