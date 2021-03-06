////////////////////////////////////////////////////////////////////////////////
#ifndef __font_h__
#define __font_h__

////////////////////////////////////////////////////////////////////////////////
#include <string>
#include <allegro.h>

#include "resource.h"

////////////////////////////////////////////////////////////////////////////////
class Font : public Resource
{
private:
	// Internal data
	DATAFILE *originaldata;
public:
	// Ctors!
	Font(std::string fn);
	Font();
	~Font();

	inline FONT *getFont() { return (FONT*)(originaldata->dat); }
	
	// Resource implementation
	bool load(std::string fn);
};

////////////////////////////////////////////////////////////////////////////////
#endif
