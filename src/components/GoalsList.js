import FinalGoal from './FinalGoal';
import FirstGoal from './FirstGoal';
import SecondGoal from './SecondGoal';
import ThirdGoal from './ThirdGoal';

const GoalsList = () => {
    return (
        <div className='goals-list'>
            <ul>
                <FirstGoal />
                <SecondGoal />
                <ThirdGoal />
                <FinalGoal />
            </ul>
        </div>
    );
}

export default GoalsList