import { Test, TestingModule } from '@nestjs/testing';
import { LanguageService } from './languages.service';

describe('LanguagesService', () => {
  let service: LanguageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageService],
    }).compile();

    service = module.get<LanguageService>(LanguageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
