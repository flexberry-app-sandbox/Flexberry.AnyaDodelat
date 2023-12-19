import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  конецСмены: DS.attr('string'),
  началоСмены: DS.attr('string'),
  типЗанятости: DS.attr('i-i-s-anya-dodelat-тип-занятости'),
  сотрудник: DS.belongsTo('i-i-s-anya-dodelat-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-anya-dodelat-табель-смены.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  конецСмены: {
    descriptionKey: 'models.i-i-s-anya-dodelat-табель-смены.validations.конецСмены.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  началоСмены: {
    descriptionKey: 'models.i-i-s-anya-dodelat-табель-смены.validations.началоСмены.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типЗанятости: {
    descriptionKey: 'models.i-i-s-anya-dodelat-табель-смены.validations.типЗанятости.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-anya-dodelat-табель-смены.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТабельСменыE', 'i-i-s-anya-dodelat-табель-смены', {
    дата: attr('Дата', { index: 0 }),
    началоСмены: attr('Начало смены', { index: 1 }),
    конецСмены: attr('Конец смены', { index: 2 }),
    типЗанятости: attr('Тип занятости', { index: 3 }),
    сотрудник: belongsTo('i-i-s-anya-dodelat-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ТабельСменыL', 'i-i-s-anya-dodelat-табель-смены', {
    дата: attr('Дата', { index: 0 }),
    началоСмены: attr('Начало смены', { index: 1 }),
    конецСмены: attr('Конец смены', { index: 2 }),
    типЗанятости: attr('Тип занятости', { index: 3 }),
    сотрудник: belongsTo('i-i-s-anya-dodelat-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
