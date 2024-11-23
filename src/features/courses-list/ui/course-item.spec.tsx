import { render, screen } from '@testing-library/react'
import { CourseItem } from './course-item'
import userEvent from '@testing-library/user-event'

describe('CourseItem', () => {
	it('should call delete callback', async () => {
		const onDelete = jest.fn()
		render(<CourseItem course={{
			id: '1',
			name: 'Test',
			description: 'Test',
		}} onDelete={onDelete} />)

		await userEvent.click(screen.getByText('Delete'))

		expect(onDelete).toHaveBeenCalled()
	})
})