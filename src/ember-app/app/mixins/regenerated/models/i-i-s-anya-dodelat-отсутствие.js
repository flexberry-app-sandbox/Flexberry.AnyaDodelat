import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаКонца: DS.attr('date'),
  датаНачала: DS.attr('date'),
  комментарий: DS.attr('string'),
  причина: DS.attr('i-i-s-anya-dodelat-тип-занятости'),
  сотрудник: DS.belongsTo('i-i-s-anya-dodelat-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  датаКонца: {
    descriptionKey: 'models.i-i-s-anya-dodelat-отсутствие.validations.датаКонца.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-anya-dodelat-отсутствие.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-anya-dodelat-отсутствие.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-anya-dodelat-отсутствие.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-anya-dodelat-отсутствие.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтсутствиеE', 'i-i-s-anya-dodelat-отсутствие', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаКонца: attr('Дата конца', { index: 1 }),
    причина: attr('Причина', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 }),
    сотрудник: belongsTo('i-i-s-anya-dodelat-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОтсутствиеL', 'i-i-s-anya-dodelat-отсутствие', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаКонца: attr('Дата конца', { index: 1 }),
    причина: attr('Причина', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 }),
    сотрудник: belongsTo('i-i-s-anya-dodelat-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
