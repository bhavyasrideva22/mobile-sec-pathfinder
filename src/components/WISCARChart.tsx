import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WISCARChartProps {
  scores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realworld: number;
  };
}

export const WISCARChart = ({ scores }: WISCARChartProps) => {
  const data = [
    { subject: 'Will', A: scores.will, fullMark: 100 },
    { subject: 'Interest', A: scores.interest, fullMark: 100 },
    { subject: 'Skill', A: scores.skill, fullMark: 100 },
    { subject: 'Cognitive', A: scores.cognitive, fullMark: 100 },
    { subject: 'Ability', A: scores.ability, fullMark: 100 },
    { subject: 'Real-world', A: scores.realworld, fullMark: 100 },
  ];

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="text-center">WISCAR Analysis</CardTitle>
        <p className="text-sm text-muted-foreground text-center">
          Your comprehensive readiness profile across six key dimensions
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar
              name="Score"
              dataKey="A"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
        
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div>
            <div className="font-medium text-primary">W - Will:</div>
            <div className="text-muted-foreground">Motivation & persistence</div>
          </div>
          <div>
            <div className="font-medium text-primary">I - Interest:</div>
            <div className="text-muted-foreground">Genuine curiosity</div>
          </div>
          <div>
            <div className="font-medium text-primary">S - Skill:</div>
            <div className="text-muted-foreground">Current abilities</div>
          </div>
          <div>
            <div className="font-medium text-primary">C - Cognitive:</div>
            <div className="text-muted-foreground">Problem-solving capacity</div>
          </div>
          <div>
            <div className="font-medium text-primary">A - Ability:</div>
            <div className="text-muted-foreground">Learning potential</div>
          </div>
          <div>
            <div className="font-medium text-primary">R - Real-world:</div>
            <div className="text-muted-foreground">Career alignment</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};