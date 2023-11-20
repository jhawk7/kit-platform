import { userActivity } from './user-activity';

describe('getAllUserActivity', () => {
    it('should return a user activity when given correct user id and content type array', async () => {
        const { userId } = await userActivity('0', null);
        expect(userId).toEqual('0');
    });
});
