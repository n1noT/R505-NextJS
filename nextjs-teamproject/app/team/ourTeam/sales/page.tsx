import Team from '@/app/ui/Team/index';
import { fetchTeam } from '@/app/lib/data';

export default async function Page() {
  const team = await fetchTeam(5);
    return (
    <Team team={team}></Team>
    );
  }