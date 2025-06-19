import { useState } from 'react';

import styles from './app.module.css';
import moment from 'moment';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setIsValueVaild] = useState(false);

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение:');
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValueVaild(false);
		} else {
			setError('');
			setValue(promptValue);
			setIsValueVaild(true);
		}
	};

	const onAddButtonClick = () => {
		const date = setList((list) => [...list, { id: Date.now(), value }]);
		setValue('');
		setError('');
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: '
				<output className={styles['current-value']}>{value}</output>'
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>

				{list.length === 0 && (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list &&
						list.map(({ id, value }) => (
							<li className={styles['list-item']} key={id}>
								{value} {moment().format('DD.MM.YYYY HH:mm:SS')}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
