window.onload = function() {
	let userName = localStorage.getItem('userName');
	document.querySelector('#your-name').innerHTML = userName;

	let answerElectronic = '"Электроника"';
	let answerIt = '"Информатика и ВТ"';
	let answerDocumentologist = '"ДОУ и Юриспруденция"';

	let specializationElectronicOne = '11.02.16 Монтаж, техническое обслуживание и ремонт электронных приборов и устройств';
	let specializationElectronicTwo = '11.01.01 Монтажник радиоэлектронной аппаратуры и приборов';
	let specializationItOne = '09.02.07 Информационные системы и программирование. Разработка веб и мультимедийных приложений';
	let specializationItTwo = '09.02.01 Компьютерные системы и комплексы';
	let specializationDocumentologist = '46.02.01 Документационное обеспечение управления и архивоведение';


	let electronic = localStorage.getItem('electronic');
	let it = localStorage.getItem('it');
	let documentologist = localStorage.getItem('documentologist');


	if ((electronic === it && electronic > documentologist) ||
		(electronic === documentologist && electronic > it) ||
		(it === documentologist) && it > electronic) {

		document.querySelector('#ie').innerHTML = 'ие';
		document.querySelector('#ii').innerHTML = 'ия';

		if (electronic === it) {
			document.querySelector('#result-answer').innerHTML = answerElectronic;
			document.querySelector('#specialization-first-one').innerHTML = specializationElectronicOne;
			document.querySelector('#specialization-first-two').innerHTML = specializationElectronicTwo;

			document.querySelector('#result-answer-two').innerHTML = answerIt;
			document.querySelector('#specialization-second-one').innerHTML = specializationItOne;
			document.querySelector('#specialization-second-two').innerHTML = specializationItTwo;

		} else if (electronic === documentologist) {
			document.querySelector('#result-answer').innerHTML = answerElectronic;
			document.querySelector('#specialization-first-one').innerHTML = specializationElectronicOne;
			document.querySelector('#specialization-first-two').innerHTML = specializationElectronicTwo;

			document.querySelector('#result-answer-two').innerHTML = answerDocumentologist;
			document.querySelector('#specialization-second-one').innerHTML = specializationDocumentologist;
			document.querySelector('#specialization-second-two').remove();
			 
		} else {
			document.querySelector('#result-answer').innerHTML =  answerIt;
			document.querySelector('#specialization-first-one').innerHTML = specializationItOne;
			document.querySelector('#specialization-first-two').innerHTML = specializationItTwo;
			document.querySelector('#result-answer-two').innerHTML = answerDocumentologist;
			document.querySelector('#specialization-second-one').innerHTML = specializationDocumentologist;

			document.querySelector('#specialization-second-two').remove();
		}
	} 



	else {
		document.querySelector('.second-answer').remove();

		if (it > electronic && it > documentologist) {
			document.querySelector('#result-answer').innerHTML = answerIt;
			document.querySelector('#specialization-first-one').innerHTML = specializationItOne;
			document.querySelector('#specialization-first-two').innerHTML = specializationItTwo;

		} else if (electronic > documentologist) {
			document.querySelector('#result-answer').innerHTML = answerElectronic;
			document.querySelector('#specialization-first-one').innerHTML = specializationElectronicOne;
			document.querySelector('#specialization-first-two').innerHTML = specializationElectronicTwo;
		} else {
			document.querySelector('#result-answer').innerHTML = answerDocumentologist;
			document.querySelector('#specialization-first-one').innerHTML = specializationDocumentologist;
			document.querySelector('#specialization-first-two').remove();
		}
	}
}