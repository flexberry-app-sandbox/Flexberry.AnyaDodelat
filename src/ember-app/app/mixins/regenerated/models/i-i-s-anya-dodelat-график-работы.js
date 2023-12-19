import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонца: DS.attr('date'),
  времяНачала: DS.attr('date'),
  типЗанятости: DS.attr('i-i-s-anya-dodelat-тип-занятости'),
  числоЧасов: DS.attr('decimal'),
  сотрудник: DS.belongsTo('i-i-s-anya-dodelat-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  времяКонца: {
    descriptionKey: 'models.i-i-s-anya-dodelat-график-работы.validations.времяКонца.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  времяНачала: {
    descriptionKey: 'models.i-i-s-anya-dodelat-график-работы.validations.времяНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  типЗанятости: {
    descriptionKey: 'models.i-i-s-anya-dodelat-график-работы.validations.типЗанятости.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  числоЧасов: {
    descriptionKey: 'models.i-i-s-anya-dodelat-график-работы.validations.числоЧасов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-anya-dodelat-график-работы.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикРаботыE', 'i-i-s-anya-dodelat-график-работы', {
    числоЧасов: attr('Число часов', { index: 0 }),
    времяНачала: attr('Время начала', { index: 1 }),
    времяКонца: attr('Время конца', { index: 2 }),
    типЗанятости: attr('Тип занятости', { index: 3 }),
    сотрудник: belongsTo('i-i-s-anya-dodelat-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ГрафикРаботыL', 'i-i-s-anya-dodelat-график-работы', {
    числоЧасов: attr('Число часов', { index: 0 }),
    времяНачала: attr('Время начала', { index: 1 }),
    времяКонца: attr('Время конца', { index: 2 }),
    типЗанятости: attr('Тип занятости', { index: 3 }),
    сотрудник: belongsTo('i-i-s-anya-dodelat-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
