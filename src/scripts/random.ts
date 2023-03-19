export const random = ({ min = 0, max }: { min?: number; max: number }) =>
	Math.floor(Math.random() * (max - min) + min);
