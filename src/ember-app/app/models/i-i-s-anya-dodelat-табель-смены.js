import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТабельСменыMixin
} from '../mixins/regenerated/models/i-i-s-anya-dodelat-табель-смены';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТабельСменыMixin, Validations, {
});

defineProjections(Model);

export default Model;
