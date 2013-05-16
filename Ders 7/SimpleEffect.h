#ifndef Ders_7_SimpleEffect_h
#define Ders_7_SimpleEffect_h
#include "Effect.h"

#ifdef __APPLE__
#include <SOIL/SOIL.h>
#else
#endif


class SimpleEffect: public Effect
{
public:
    SimpleEffect(int* screen_width, int* screen_height):Effect("effect_simple.frag",screen_width, screen_height)
	{
    }
};

#endif
